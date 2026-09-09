"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle({
  labels,
}: {
  labels: { light: string; dark: string; group: string };
}) {
  const [theme, setThemeState] = useState<"light" | "dark">("light");

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    if (current === "dark" || current === "light") {
      setThemeState(current);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setThemeState("dark");
    }
  }, []);

  function setTheme(next: "light" | "dark") {
    setThemeState(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("klikking_theme", next);
    } catch {
      // ignore (private browsing / storage disabled)
    }
  }

  return (
    <div className="toggle-group" role="group" aria-label={labels.group}>
      <button type="button" aria-pressed={theme === "light"} onClick={() => setTheme("light")}>
        <span aria-hidden="true">☼</span>
        <span className="sr-only">{labels.light}</span>
      </button>
      <button type="button" aria-pressed={theme === "dark"} onClick={() => setTheme("dark")}>
        <span aria-hidden="true">☾</span>
        <span className="sr-only">{labels.dark}</span>
      </button>
    </div>
  );
}
