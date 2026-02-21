"use client";

import Link, { type LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MARKETING_HEADER_DESC_LINKS } from "@/lib/constants/nav";
import { useScrollLock } from "@/lib/hooks/use-scroll-lock";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const { lock, unlock } = useScrollLock({
    autoLock: false,
    lockTarget: "body",
  });

  React.useEffect(() => {
    if (open) {
      lock();
    }

    return () => {
      unlock();
    };
  }, [open]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="extend-touch-target touch-manipulation hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 active:bg-transparent aria-expanded:bg-transparent lg:hidden dark:hover:bg-transparent"
        >
          <div className="relative size-4">
            <span
              className={cn(
                "bg-foreground absolute left-0 block h-0.5 w-4 transition-all duration-100",
                open ? "top-[0.4rem] -rotate-45" : "top-1"
              )}
            />
            <span
              className={cn(
                "bg-foreground absolute left-0 block h-0.5 w-4 transition-all duration-100",
                open ? "top-[0.4rem] rotate-45" : "top-2.5"
              )}
            />
          </div>

          <span className="sr-only">Toggle menu</span>
        </Button>
      </PopoverTrigger>

      <PopoverContent
        className="bg-background no-scrollbar h-(--radix-popper-available-height) w-(--radix-popper-available-width) overflow-y-auto rounded-none border-none p-0 shadow-none duration-100 data-open:animate-none!"
        align="end"
        side="bottom"
        alignOffset={-16}
        sideOffset={16}
      >
        <div className="flex flex-col gap-12 overflow-auto px-6 py-6">
          {MARKETING_HEADER_DESC_LINKS.map((link, index) => {
            if (!link.items) {
              return (
                <MobileLink key={index} href={link.href} onOpenChange={setOpen}>
                  {link.title}
                </MobileLink>
              );
            }

            return (
              <div key={index} className="flex flex-col gap-4">
                <span className="text-muted-foreground block text-sm font-medium">
                  {link.title}
                </span>

                <ul className="flex flex-col gap-3">
                  {link.items.map((subLink, subIndex) => (
                    <li key={subIndex}>
                      <MobileLink href={subLink.href} onOpenChange={setOpen}>
                        {subLink.title}
                      </MobileLink>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </PopoverContent>
    </Popover>
  );
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: LinkProps & {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}) {
  const router = useRouter();

  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn("flex items-center gap-2 text-2xl font-medium", className)}
      {...props}
    >
      {children}
    </Link>
  );
}
