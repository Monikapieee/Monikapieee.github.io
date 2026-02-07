"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

interface MenuContextValue {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
}

const MenuContext = createContext<MenuContextValue | null>(null);

export function useMenu(): MenuContextValue {
  const ctx = useContext(MenuContext);
  if (!ctx) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return ctx;
}

export function MenuProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isOpen]);

  return (
    <MenuContext.Provider value={{ isOpen, toggle, close }}>
      {children}
    </MenuContext.Provider>
  );
}
