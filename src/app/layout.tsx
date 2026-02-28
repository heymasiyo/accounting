import "@/styles/globals.css";

import type { Metadata } from "next";

import { BreadcrumbProvider } from "@/components/breadcrumb-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { fontVariables } from "@/lib/fonts";

export const metadata: Metadata = {
  title: {
    default: "Acme - The Modern Accounting System",
    template: "%s - Acme",
  },
  description:
    "Acme is the modern accounting platform that simplifies invoicing, expense tracking, and financial reporting in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={fontVariables}
    >
      <body className="bg-background text-foreground relative font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <BreadcrumbProvider>
              {children}

              <Toaster position="top-right" richColors />
            </BreadcrumbProvider>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
