import { Clock, FileText, ShieldCheck } from "lucide-react";
import Link from "next/link";

import { BottomSpacer } from "@/components/bottom-spacer";
import { Button } from "@/components/ui/button";

const heroFeatures = [
  {
    title: "Save 50% administration time",
    icon: Clock,
  },
  {
    title: "Access 50+ financial reports",
    icon: FileText,
  },
  {
    title: "Reduce errors up to 90%",
    icon: ShieldCheck,
  },
];

export function HomeHero() {
  return (
    <section className="relative">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-8 overflow-hidden pt-32 md:pt-40">
        <div className="flex flex-col gap-3 px-6 lg:px-16">
          <h1 className="w-full max-w-175 text-[2.375rem] leading-tight font-medium tracking-tight text-pretty md:text-[3.5rem]">
            Accounting made simple for modern businesses
          </h1>

          <p className="text-muted-foreground text-pretty">
            Manage invoices, expenses, assets, and financial reports in one
            place.
          </p>
        </div>

        <div className="flex gap-3 px-6 lg:px-16">
          <Button asChild size="lg">
            <Link href="/signup">Get started</Link>
          </Button>
        </div>

        <div className="flex w-full flex-col gap-4 pt-8">
          <div className="flex justify-between px-6 lg:px-16">
            <div />

            <div className="text-muted-foreground hidden items-center gap-1.5 text-xs md:inline-flex">
              {heroFeatures.map((feature, index) => (
                <span key={index} className="inline-flex items-center">
                  {feature.title}{" "}
                  <feature.icon className="mx-1.5 inline-block size-3.5" />
                  {index !== heroFeatures.length - 1 && ", "}
                </span>
              ))}
            </div>
          </div>

          <div className="px-6">
            <div className="mx-auto w-min overflow-hidden rounded-t-4xl border-x border-t p-3 pb-0">
              <div className="flex w-296.5 justify-center pt-px">
                <div className="h-102.5 w-296 max-w-full rounded-t-[10px] border-x border-t bg-neutral-100 px-px pt-px shadow dark:bg-neutral-900"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomSpacer />
    </section>
  );
}
