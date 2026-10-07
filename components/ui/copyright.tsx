"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";

export function Copyright() {
  const [year, setYear] = useState("");

  useEffect(() => {
    const id = window.setTimeout(() => {
      setYear(String(new Date().getFullYear()));
    }, 0);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <p className="text-sm text-mute">
      © {year} {site.name}
    </p>
  );
}
