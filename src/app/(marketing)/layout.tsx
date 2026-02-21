import { SiteFooter } from "@/components/marketing/layout/site-footer";
import { SiteHeader } from "@/components/marketing/layout/site-header";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-svh flex-col">
      <div className="pointer-events-none fixed inset-0 z-1 mx-auto hidden w-full max-w-7xl xl:block">
        <div className="absolute top-0 bottom-0 w-px border-l" />

        <div className="absolute top-0 right-0 bottom-0 w-px border-r" />
      </div>

      <SiteHeader />

      <main className="flex-1">{children}</main>

      <SiteFooter />
    </div>
  );
}
