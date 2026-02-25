import Link from "next/link";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-svh items-center justify-center px-4 py-12">
      <div className="flex w-full flex-col items-center justify-center gap-6">
        <Link href="/" className="block">
          <div className="border-foreground size-9 rounded-full border-9 bg-transparent" />

          <span className="sr-only">Home</span>
        </Link>

        {children}
      </div>
    </div>
  );
}
