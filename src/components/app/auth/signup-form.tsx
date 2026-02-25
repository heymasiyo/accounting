"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod/v4";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Spinner } from "@/components/ui/spinner";
import { emailSchema, nameSchema, passwordSchema } from "@/lib/schemas/auth";

const formSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  password: passwordSchema,
});

export function SignupForm() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  function submit(data: z.infer<typeof formSchema>) {
    setIsLoading(true);
    console.log(data);

    setTimeout(() => {
      setIsLoading(false);
      toast.success("Sign up successful");

      form.reset();
    }, 500);
  }

  return (
    <div className="mt-3 flex flex-col gap-3">
      <Button type="button" variant="outline" disabled={isLoading}>
        <Icons.google />
        Continue with Google
      </Button>

      <div className="relative my-3">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>

        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-card text-muted-foreground px-2 font-medium">
            or
          </span>
        </div>
      </div>

      <form
        id="form"
        onSubmit={form.handleSubmit(submit)}
        className="flex flex-col gap-7"
      >
        <FieldGroup className="gap-5">
          <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="name">Full name</FieldLabel>

                <InputGroup>
                  <InputGroupInput
                    {...field}
                    id="name"
                    type="text"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your full name"
                    autoComplete="on"
                    disabled={isLoading}
                    className="rounded-md text-sm"
                    required
                  />
                </InputGroup>

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="email">Email address</FieldLabel>

                <InputGroup>
                  <InputGroupInput
                    {...field}
                    id="email"
                    type="email"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your email address"
                    autoComplete="on"
                    disabled={isLoading}
                    className="rounded-md text-sm"
                    required
                  />
                </InputGroup>

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="password">Password</FieldLabel>

                <InputGroup>
                  <InputGroupInput
                    {...field}
                    id="password"
                    type={showPassword ? "text" : "password"}
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your password"
                    autoComplete="off"
                    disabled={isLoading}
                    className="rounded-md text-sm"
                    required
                  />

                  <InputGroupAddon align="inline-end">
                    <InputGroupButton
                      aria-label="Toogle password visibility"
                      size="icon-xs"
                      onClick={() => setShowPassword((prev) => !prev)}
                      disabled={isLoading}
                    >
                      {showPassword ? <EyeOff /> : <Eye />}
                    </InputGroupButton>
                  </InputGroupAddon>
                </InputGroup>

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>

        <Button type="submit" form="form" disabled={isLoading}>
          {isLoading && <Spinner />}
          Continue
        </Button>
      </form>
    </div>
  );
}
