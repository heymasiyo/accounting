"use client";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { MARKETING_HEADER_DESC_LINKS } from "@/lib/constants/nav";
import { cn } from "@/lib/utils";

export function MainNav() {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList className="gap-1">
        {MARKETING_HEADER_DESC_LINKS.map((link, index) => {
          if (!link.items) {
            return (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  asChild
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "text-muted-foreground px-3",
                    "hover:text-foreground focus-visible:text-foreground transition-colors"
                  )}
                >
                  <Link href={link.href}>{link.title}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          }

          return (
            <NavigationMenuItem key={index}>
              <NavigationMenuTrigger className="text-muted-foreground hover:text-foreground focus-visible:text-foreground transition-colors">
                {link.title}
              </NavigationMenuTrigger>

              <NavigationMenuContent className="bg-background p-2">
                <ul className="grid w-170 grid-cols-2 rounded-md border bg-neutral-100 p-3 dark:bg-neutral-900">
                  {link.items.map((subLink, subIndex) => (
                    <li key={subIndex}>
                      <NavigationMenuLink asChild className="px-4 py-3">
                        <Link href={subLink.href} aria-label={subLink.title}>
                          <div className="flex flex-col gap-0.5 text-sm">
                            <span className="font-medium">{subLink.title}</span>

                            <span className="text-muted-foreground font-normal">
                              {subLink.description}
                            </span>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
