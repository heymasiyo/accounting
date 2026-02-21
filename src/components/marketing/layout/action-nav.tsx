import Link from "next/link";

import { MobileNav } from "@/components/marketing/layout/mobile-nav";
import { Button } from "@/components/ui/button";

export function ActionNav() {
  return (
    <div className="flex items-center gap-3">
      <Button asChild variant="ghost">
        <Link href="/login">Log in</Link>
      </Button>

      <Button asChild>
        <Link href="/signup">Sign up</Link>
      </Button>

      <MobileNav />
    </div>
  );
}
