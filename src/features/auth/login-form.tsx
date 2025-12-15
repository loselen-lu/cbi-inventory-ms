"use client";

import { useForm } from "react-hook-form";
import { LoginInput, loginSchema } from "./auth-types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "./use-auth";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { LogIn, UserX } from "lucide-react";

const LoginForm = () => {
  const { login, isLoggingIn, loginError } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({ resolver: zodResolver(loginSchema) });

  return (
    <div className="flex min-h-dvh bg-primary">
      <main className="flex-1 py-14 px-8 mt-32 bg-background rounded-t-2xl flex justify-center">
        <div className="w-full max-w-96">
          <div className="mb-8 flex justify-center items-center gap-2">
            <LogIn />
            <h1 className="text-2xl font-semibold">Login</h1>
          </div>
          <form onSubmit={handleSubmit((data) => login(data))}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="username">Username</FieldLabel>
                <Input
                  id="username"
                  type="text"
                  placeholder="johndoe"
                  {...register("username")}
                />
                {errors.username && (
                  <FieldError>
                    <p>{errors.username.message}</p>
                  </FieldError>
                )}
              </Field>

              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••"
                  {...register("password")}
                />
                {errors.password && (
                  <FieldError>
                    <p>{errors.password.message}</p>
                  </FieldError>
                )}
              </Field>

              <Button type="submit" disabled={isLoggingIn}>
                {isLoggingIn ? <Spinner /> : "Submit"}
              </Button>

              {loginError && (
                <Alert variant="destructive">
                  <UserX />
                  <AlertTitle>Login Error</AlertTitle>
                  <AlertDescription>
                    <p>{loginError.message}</p>
                  </AlertDescription>
                </Alert>
              )}
            </FieldGroup>
          </form>
        </div>
      </main>
    </div>
  );
};

export { LoginForm };
