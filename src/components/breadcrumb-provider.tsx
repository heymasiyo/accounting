"use client";

import * as React from "react";

type Crumb = {
  label: string;
  href?: string;
  icon?: React.ElementType;
};

type BreadcrumbContextType = {
  crumbs: Crumb[];
  setCrumbs: (crumbs: Crumb[]) => void;
};

const BreadcrumbContext = React.createContext<BreadcrumbContextType | null>(
  null
);

export function BreadcrumbProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [crumbs, setCrumbs] = React.useState<Crumb[]>([]);

  return (
    <BreadcrumbContext.Provider value={{ crumbs, setCrumbs }}>
      {children}
    </BreadcrumbContext.Provider>
  );
}

export function useBreadcrumb() {
  const context = React.useContext(BreadcrumbContext);

  if (!context) {
    throw new Error("useBreadcrumb must be used inside BreadcrumbProvider");
  }

  return context;
}
