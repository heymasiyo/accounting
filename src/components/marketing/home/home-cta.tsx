import Link from "next/link";

import { Button } from "@/components/ui/button";

export function HomeCta() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-16">
      <div className="flex flex-col gap-x-16 gap-y-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex w-full shrink-0 flex-col gap-3 md:max-w-100 lg:max-w-125">
          <h2 className="text-[2rem] leading-tight font-medium tracking-tight text-pretty lg:text-[2.5rem]">
            Start managing your business finances today
          </h2>
        </div>

        <div className="flex gap-3">
          <Button asChild size="lg">
            <Link href="/signup">Get started</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
