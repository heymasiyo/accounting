import Link from "next/link";

import { ActionNav } from "@/components/marketing/layout/action-nav";
import { MainNav } from "@/components/marketing/layout/main-nav";

export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-50 border-b">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 lg:px-16">
        <div className="flex items-center gap-3">
          <Link href="/" className="block py-3.5">
            <div className="border-foreground size-4 rounded-full border-4 bg-transparent" />

            <span className="sr-only">Home</span>
          </Link>

          <MainNav />
        </div>

        <ActionNav />
      </div>
    </header>
  );
}
