import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      tabIndex={0}
      role="button"
      onKeyDown={() => setTheme(theme === "dark" ? "light" : "dark")}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <Moon color="#f3f3f3" size={20} /> : <Sun color="#181717" size={20} />}
    </div>
  );
}
