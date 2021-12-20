import { useState } from "react";

export const useTheme = () => {
  const [theme, setStoredValue] = useState(localStorage.getItem('theme') || 'light');

  const setTheme = (value: string): void => {
    localStorage.setItem('theme', value);
    setStoredValue(value);
  }

  return [localStorage.getItem('theme') || 'light', setTheme] as const;
}