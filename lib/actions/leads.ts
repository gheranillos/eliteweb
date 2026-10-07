"use server";

import { eventTypes, site, type EventType } from "@/content/site";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export type LeadField =
  | "name"
  | "email"
  | "phone"
  | "event_type"
  | "event_date"
  | "message";

export type LeadFormState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors: Partial<Record<LeadField, string>>;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
const EVENT_TYPE_VALUES = new Set<string>(eventTypes.map((item) => item.value));

function clean(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

function parseEventDate(value: string) {
  if (!DATE_PATTERN.test(value)) {
    return null;
  }

  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));

  if (
    date.getUTCFullYear() !== year ||
    date.getUTCMonth() !== month - 1 ||
    date.getUTCDate() !== day
  ) {
    return null;
  }

  return date;
}

function startOfUtcDay(date: Date) {
  return Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
}

export async function submitLead(
  _previous: LeadFormState,
  formData: FormData,
): Promise<LeadFormState> {
  const name = clean(formData.get("name")).replace(/\s+/g, " ");
  const email = clean(formData.get("email")).toLowerCase();
  const phone = clean(formData.get("phone"));
  const eventType = clean(formData.get("event_type"));
  const eventDate = clean(formData.get("event_date"));
  const message = clean(formData.get("message"));
  const fieldErrors: LeadFormState["fieldErrors"] = {};

  if (name.length < 2 || name.length > 80) {
    fieldErrors.name = site.contact.fields.name.error;
  }

  if (!EMAIL_PATTERN.test(email) || email.length > 160) {
    fieldErrors.email = site.contact.fields.email.error;
  }

  const phoneDigits = phone.replace(/\D/g, "");
  if (phone.length > 30 || phoneDigits.length < 8 || phoneDigits.length > 15) {
    fieldErrors.phone = site.contact.fields.phone.error;
  }

  if (!EVENT_TYPE_VALUES.has(eventType)) {
    fieldErrors.event_type = site.contact.fields.event_type.error;
  }

  const parsedDate = parseEventDate(eventDate);
  if (!parsedDate) {
    fieldErrors.event_date = site.contact.fields.event_date.error;
  } else {
    const today = startOfUtcDay(new Date());
    const earliest = today - 24 * 60 * 60 * 1000;
    const latest = today + 3 * 366 * 24 * 60 * 60 * 1000;
    const selected = parsedDate.getTime();

    if (selected < earliest || selected > latest) {
      fieldErrors.event_date = site.contact.fields.event_date.range;
    }
  }

  if (message.length < 10 || message.length > 2000) {
    fieldErrors.message = site.contact.fields.message.error;
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: site.contact.invalid,
      fieldErrors,
    };
  }

  const supabase = createSupabaseServerClient();

  if (!supabase) {
    return {
      status: "error",
      message: site.contact.unavailable,
      fieldErrors: {},
    };
  }

  const { error } = await supabase.from("leads").insert({
    name,
    email,
    phone,
    event_type: eventType as EventType,
    event_date: eventDate,
    message,
  });

  if (error) {
    console.error("lead_insert_failed", error.code);
    return {
      status: "error",
      message: site.contact.error,
      fieldErrors: {},
    };
  }

  return {
    status: "success",
    message: site.contact.success,
    fieldErrors: {},
  };
}
