import Link from "next/link";

import { SignupForm } from "@/components/app/auth/signup-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SignupPage() {
  return (
    <>
      <Card className="w-full max-w-sm py-5">
        <CardHeader className="text-center">
          <CardTitle className="text-lg">Create your account</CardTitle>

          <CardDescription>
            Welcome! Please fill in the details to get started
          </CardDescription>
        </CardHeader>

        <CardContent>
          <SignupForm />
        </CardContent>

        <CardFooter className="flex items-center justify-center">
          <p className="text-muted-foreground text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-foreground hover:underline">
              Log in
            </Link>
          </p>
        </CardFooter>
      </Card>

      <div className="w-full max-w-[288px] text-center">
        <p className="text-muted-foreground text-sm text-balance">
          By signing up, you agree to our{" "}
          <Link href="/terms" className="text-foreground hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/dpa" className="text-foreground hover:underline">
            Data Protection Agreement
          </Link>
          .
        </p>
      </div>
    </>
  );
}
