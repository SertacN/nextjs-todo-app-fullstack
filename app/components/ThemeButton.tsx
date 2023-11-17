"use client";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className="rounded-lg transition-color duration-500 px-3 py-1 hover:bg-slate-500"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "dark" ? (
        <SunIcon className="h-8 w-8  text-orange-300" />
      ) : (
        <MoonIcon className="h-8 w-8  text-slate-800" />
      )}
    </button>
  );
};

export default ThemeButton;
