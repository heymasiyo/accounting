import Link from "next/link";

import { ResetPasswordForm } from "@/components/app/auth/reset-password-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ResetPasswordPage() {
  return (
    <Card className="w-full max-w-sm py-5">
      <CardHeader className="text-center">
        <CardTitle className="text-lg">Reset password</CardTitle>

        <CardDescription>
          Enter your email address below, and we'll send you instructions on how
          to reset
        </CardDescription>
      </CardHeader>

      <CardContent>
        <ResetPasswordForm />
      </CardContent>

      <CardFooter className="flex items-center justify-center">
        <p className="text-muted-foreground text-sm">
          Remember now?{" "}
          <Link href="/login" className="text-foreground hover:underline">
            Back to Log in
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
