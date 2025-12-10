"use client";

import { useForm } from "react-hook-form";
import { LoginFormInput, loginSchema } from "./auth.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { TanStackQueryProvider } from "@/lib/TanStackQueryProvider";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInput>({ resolver: zodResolver(loginSchema) });

  const onSubmit = (data: LoginFormInput) => {
    console.log("User logged in as:", data.username);
  };

  return (
    <main>
      <h1>Login</h1>
      <TanStackQueryProvider>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="johndoe"
            {...register("username", { required: "Username is required." })}
          />
          {errors.username && <p>{errors.username.message}</p>}

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="••••••"
            {...register("password", { required: "Password is required." })}
          />
          {errors.password && <p>{errors.password.message}</p>}

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      </TanStackQueryProvider>
    </main>
  );
};

export { LoginForm };
