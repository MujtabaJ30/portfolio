"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "@phosphor-icons/react";
import { useTheme } from "@/app/components/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const icon = mounted && theme === "light" ? <Sun weight="bold" /> : <Moon weight="bold" />;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="rounded p-2 text-text transition-colors hover:bg-surface-hover"
    >
      {icon}
    </button>
  );
}
