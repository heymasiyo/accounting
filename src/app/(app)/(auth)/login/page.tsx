import Link from "next/link";

import { LoginForm } from "@/components/app/auth/login-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LoginPage() {
  return (
    <Card className="w-full max-w-sm py-5">
      <CardHeader className="text-center">
        <CardTitle className="text-lg">Log in to Acme</CardTitle>

        <CardDescription>
          Welcome back! Please log in to continue
        </CardDescription>
      </CardHeader>

      <CardContent>
        <LoginForm />
      </CardContent>

      <CardFooter className="flex items-center justify-center">
        <p className="text-muted-foreground text-sm">
          Don't have an account?{" "}
          <Link href="/signup" className="text-foreground hover:underline">
            Sign up
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
