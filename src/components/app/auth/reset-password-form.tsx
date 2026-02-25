"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod/v4";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { InputGroup, InputGroupInput } from "@/components/ui/input-group";
import { Spinner } from "@/components/ui/spinner";
import { emailSchema } from "@/lib/schemas/auth";

const formSchema = z.object({
  email: emailSchema,
});

export function ResetPasswordForm() {
  const [isLoading, setIsLoading] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function submit(data: z.infer<typeof formSchema>) {
    setIsLoading(true);
    console.log(data);

    setTimeout(() => {
      setIsLoading(false);
      toast.success("Link sent successfully to your email");

      form.reset();
    }, 500);
  }

  return (
    <div className="mt-3">
      <form
        id="form"
        onSubmit={form.handleSubmit(submit)}
        className="flex flex-col gap-7"
      >
        <FieldGroup className="gap-5">
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
        </FieldGroup>

        <Button type="submit" form="form" disabled={isLoading}>
          {isLoading && <Spinner />}
          Continue
        </Button>
      </form>
    </div>
  );
}
