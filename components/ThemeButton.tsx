"use client";
import { Button } from "@nextui-org/react";
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
    <div className="flex flex-col items-center">
      <h2 className="text-4xl mb-5">To-do App</h2>
      <div>
        <Button color="primary" onClick={() => setTheme("light")}>
          Light
        </Button>
        <Button
          color="primary"
          className="mx-4"
          onClick={() => setTheme("dark")}
        >
          Dark
        </Button>
        <Button color="primary" onClick={() => setTheme("modern")}>
          Modern
        </Button>
      </div>
    </div>
  );
};

export default ThemeButton;
