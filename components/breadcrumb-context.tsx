'use client';

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

export interface BreadcrumbOverride {
  href?: string;
  segment?: string;
  label: string;
}

interface BreadcrumbContextValue {
  overrides: BreadcrumbOverride[];
  hide: boolean;
  setOverrides: (overrides: BreadcrumbOverride[]) => void;
  setHide: (hide: boolean) => void;
  reset: () => void;
}

const BreadcrumbContext = createContext<BreadcrumbContextValue | undefined>(undefined);

export const BreadcrumbProvider = ({ children }: { children: ReactNode }) => {
  const [overrides, setOverrides] = useState<BreadcrumbOverride[]>([]);
  const [hide, setHide] = useState(false);

  const value = useMemo(
    () => ({
      overrides,
      hide,
      setOverrides,
      setHide,
      reset: () => {
        setOverrides([]);
        setHide(false);
      },
    }),
    [overrides, hide]
  );

  return <BreadcrumbContext.Provider value={value}>{children}</BreadcrumbContext.Provider>;
};

export const useBreadcrumbContext = () => {
  const context = useContext(BreadcrumbContext);
  if (!context) {
    throw new Error('useBreadcrumbContext must be used within a BreadcrumbProvider');
  }
  return context;
};

interface BreadcrumbControllerProps {
  overrides?: BreadcrumbOverride[];
  hide?: boolean;
}

export const BreadcrumbController = ({ overrides = [], hide = false }: BreadcrumbControllerProps) => {
  const { setOverrides, setHide } = useBreadcrumbContext();

  useEffect(() => {
    setOverrides(overrides);
    setHide(hide);

    return () => {
      setOverrides([]);
      setHide(false);
    };
  }, [overrides, hide, setOverrides, setHide]);

  return null;
};
