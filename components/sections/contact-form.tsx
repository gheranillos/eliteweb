"use client";

import { useActionState, useEffect, useState } from "react";
import { eventTypes, site } from "@/content/site";
import { submitLead, type LeadFormState } from "@/lib/actions/leads";

const initialState: LeadFormState = {
  status: "idle",
  message: "",
  fieldErrors: {},
};

const fieldClass =
  "mt-3 w-full border-b border-line bg-transparent py-3 text-base text-ink transition-colors duration-300 focus:border-ink";

function utcIso(offsetDays: number) {
  const date = new Date();
  date.setUTCDate(date.getUTCDate() + offsetDays);
  return date.toISOString().slice(0, 10);
}

function LeadForm({ onReset }: { onReset: () => void }) {
  const [state, formAction, pending] = useActionState(submitLead, initialState);
  const [bounds, setBounds] = useState<{ min: string; max: string } | null>(null);

  useEffect(() => {
    const id = window.setTimeout(() => {
      setBounds({ min: utcIso(0), max: utcIso(366 * 3) });
    }, 0);
    return () => window.clearTimeout(id);
  }, []);

  if (state.status === "success") {
    return (
      <div role="status" className="border-t border-accent pt-8">
        <p className="max-w-md font-display text-4xl leading-none tracking-[0.04em] text-ink">
          {state.message}
        </p>
        <button
          type="button"
          onClick={onReset}
          className="mt-10 inline-flex min-h-11 items-center border border-line px-5 font-condensed text-sm tracking-[0.18em] text-ink transition-colors duration-300 hover:border-accent"
        >
          {site.contact.another}
        </button>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className={`min-w-0 ${pending ? "opacity-60" : ""}`}
      aria-busy={pending}
      noValidate
    >
      {state.status === "error" && state.message ? (
        <p role="alert" className="mb-8 text-sm text-accent">
          {state.message}
        </p>
      ) : null}

      <fieldset className="m-0 grid min-w-0 grid-cols-1 gap-8 border-0 p-0 md:grid-cols-2">
        <Field
          id="name"
          name="name"
          label={site.contact.fields.name.label}
          error={state.fieldErrors.name}
          autoComplete="name"
          maxLength={80}
          className="md:col-span-2"
        />
        <Field
          id="email"
          name="email"
          type="email"
          label={site.contact.fields.email.label}
          error={state.fieldErrors.email}
          autoComplete="email"
          inputMode="email"
          maxLength={160}
        />
        <Field
          id="phone"
          name="phone"
          type="tel"
          label={site.contact.fields.phone.label}
          error={state.fieldErrors.phone}
          autoComplete="tel"
          inputMode="tel"
          maxLength={30}
        />

        <div className="min-w-0">
          <label
            htmlFor="event_type"
            className="font-condensed text-sm tracking-[0.18em] text-mute"
          >
            {site.contact.fields.event_type.label}
          </label>
          <select
            id="event_type"
            name="event_type"
            required
            defaultValue=""
            aria-invalid={state.fieldErrors.event_type ? true : undefined}
            aria-describedby={
              state.fieldErrors.event_type ? "event_type-error" : undefined
            }
            className={fieldClass}
          >
            <option value="" disabled>
              Selecciona
            </option>
            {eventTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
          {state.fieldErrors.event_type ? (
            <p id="event_type-error" className="mt-2 text-sm text-accent">
              {state.fieldErrors.event_type}
            </p>
          ) : null}
        </div>

        <Field
          id="event_date"
          name="event_date"
          type="date"
          label={site.contact.fields.event_date.label}
          error={state.fieldErrors.event_date}
          min={bounds?.min}
          max={bounds?.max}
        />

        <div className="min-w-0 md:col-span-2">
          <label
            htmlFor="message"
            className="font-condensed text-sm tracking-[0.18em] text-mute"
          >
            {site.contact.fields.message.label}
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            maxLength={2000}
            aria-invalid={state.fieldErrors.message ? true : undefined}
            aria-describedby={state.fieldErrors.message ? "message-error" : undefined}
            className={`${fieldClass} resize-y`}
          />
          {state.fieldErrors.message ? (
            <p id="message-error" className="mt-2 text-sm text-accent">
              {state.fieldErrors.message}
            </p>
          ) : null}
        </div>
      </fieldset>

      <button
        type="submit"
        disabled={pending}
        className="mt-10 inline-flex min-h-12 items-center border border-ink px-6 font-condensed text-sm tracking-[0.2em] text-ink transition-colors duration-300 hover:border-accent disabled:cursor-wait disabled:opacity-60"
      >
        {pending ? site.contact.sending : site.contact.submit}
      </button>
    </form>
  );
}

function Field({
  id,
  name,
  label,
  error,
  type = "text",
  autoComplete,
  inputMode,
  maxLength,
  min,
  max,
  className = "",
}: {
  id: string;
  name: string;
  label: string;
  error?: string;
  type?: string;
  autoComplete?: string;
  inputMode?: "email" | "tel" | "text";
  maxLength?: number;
  min?: string;
  max?: string;
  className?: string;
}) {
  return (
    <div className={`min-w-0 ${className}`}>
      <label htmlFor={id} className="font-condensed text-sm tracking-[0.18em] text-mute">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required
        autoComplete={autoComplete}
        inputMode={inputMode}
        maxLength={maxLength}
        min={min}
        max={max}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={fieldClass}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-accent">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function ContactForm() {
  const [formKey, setFormKey] = useState(0);

  return <LeadForm key={formKey} onReset={() => setFormKey((value) => value + 1)} />;
}
