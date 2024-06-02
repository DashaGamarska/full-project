'use client';
import { useEffect, useState } from 'react';

export function getStorageValue<T>(key: string, defaultValue: T): T {
  if (typeof window !== 'undefined') {
    try {
      const saved = localStorage.getItem(key);
      if (saved) {
        return JSON.parse(saved) as T;
      }
    } catch (error) {
      console.error('Error reading from localStorage:', error);
    }
  }
  return defaultValue;
}

export const useLocalStorage = <T>(key: string, defaultValue: T) => {
  const [value, setValue] = useState<T>(defaultValue);

  useEffect(() => {
    const storedValue = getStorageValue<T>(key, defaultValue);
    setValue(storedValue);
  }, [key, defaultValue]); // Включено key та defaultValue до масиву залежностей

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.error('Error writing to localStorage:', error);
    }
  }, [key, value]); // Включено key та value до масиву залежностей

  return [value, setValue] as const;
};
