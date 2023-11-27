"use client";
import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Tabs, Tab } from "@nextui-org/tabs";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const handleThemeChange = (theme: string) => {
    setTheme(theme);
  };
  return (
    <div className="flex flex-col items-center w-full">
      <h2 className="text-4xl mb-5">To-do App</h2>
      <div>
        <Tabs
          color="primary"
          aria-label="ThemeButton"
          variant="bordered"
          size="lg"
          onSelectionChange={(key: any) => handleThemeChange(key)}
        >
          <Tab key="light" title="Light" />
          <Tab key="dark" title="Dark" />
          <Tab key="modern" title="Modern" />
        </Tabs>
      </div>
    </div>
  );
};

export default ThemeButton;
