"use client";

import { useForm } from "react-hook-form";
import { LoginInput, loginSchema } from "./auth.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "./useAuth";

const LoginForm = () => {
  const { login, isLoggingIn, loginError } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({ resolver: zodResolver(loginSchema) });

  return (
    <main>
      <h1>Login</h1>
      <form onSubmit={handleSubmit((data) => login(data))}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          placeholder="johndoe"
          {...register("username")}
        />
        {errors.username && <p>{errors.username.message}</p>}

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="••••••"
          {...register("password")}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <button type="submit" disabled={isLoggingIn}>
          {isLoggingIn ? "Is logging in..." : "Submit"}
        </button>

        {loginError && <p>{loginError.message}</p>}
      </form>
    </main>
  );
};

export { LoginForm };
