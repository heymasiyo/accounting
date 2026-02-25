import Link from "next/link";

import { MARKETING_FOOTER_LINKS } from "@/lib/constants/nav";

export function SiteFooter() {
  return (
    <footer className="bg-background z-1 border-t">
      <div className="mx-auto flex w-full max-w-7xl flex-col flex-wrap gap-12 px-6 py-24 lg:flex-row lg:flex-nowrap lg:gap-4 lg:px-16">
        <div className="w-full basis-1/6">
          <Link href="/" className="block">
            <div className="border-foreground size-5 rounded-full border-5 bg-transparent" />

            <span className="sr-only">Home</span>
          </Link>
        </div>

        <div className="grid w-full basis-5/6 grid-cols-2 gap-x-4 gap-y-12 text-sm lg:grid-cols-3 lg:gap-y-4 xl:grid-cols-4">
          {MARKETING_FOOTER_LINKS.map((headerItem, headerIndex) => (
            <ul className="flex flex-col gap-y-4" key={headerIndex}>
              <li className="mb-1 font-medium">{headerItem.title}</li>

              {headerItem.items.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <Link
                    href={subItem.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {subItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </footer>
  );
}
