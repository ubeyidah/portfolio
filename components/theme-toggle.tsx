"use client";

import { MoonIcon, SunIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  if (!mounted) return null
  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="p-2.5 min-h-11 min-w-11 rounded-lg hover:bg-muted transition-colors"
      aria-label="Toggle theme"
    >
      <HugeiconsIcon
        icon={resolvedTheme === "dark" ? SunIcon : MoonIcon}
        size={16}
        className="transition-transform duration-200"
      />
    </button>
  );
}
