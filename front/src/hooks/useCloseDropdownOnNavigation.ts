'use client';
import { usePathname } from 'next/navigation';
import { SetStateAction, useEffect } from 'react';

const useCloseDropdownOnNavigation = (
  setIsMenuOpen: (value: SetStateAction<boolean>) => void
) => {
  const pathName = usePathname();

  useEffect(() => {
    // Close the menu when navigating to another page
    setIsMenuOpen(false);
  }, [pathName, setIsMenuOpen]);
};

export default useCloseDropdownOnNavigation;
