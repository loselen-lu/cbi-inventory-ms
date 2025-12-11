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
    <div className="min-h-dvh bg-primary flex flex-col">
      <header className="p-16">
        <h2 className="text-xl text-center text-primary-content font-medium">
          CBI Inventory MS
        </h2>
      </header>
      <main className="bg-base-100 flex-1 rounded-t-box p-8 flex justify-center">
        <div className="w-full max-w-2xl">
          <h1 className="text-xl text-center font-medium">Login</h1>
          <form onSubmit={handleSubmit((data) => login(data))}>
            <fieldset className="fieldset gap-4">
              <label className="label" htmlFor="username">
                Username
              </label>
              <input
                className="input w-full"
                id="username"
                type="text"
                placeholder="johndoe"
                {...register("username")}
              />
              {errors.username && (
                <p className="text-error">{errors.username.message}</p>
              )}

              <label className="label" htmlFor="password">
                Password
              </label>
              <input
                className="input w-full"
                id="password"
                type="password"
                placeholder="••••••"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-error">{errors.password.message}</p>
              )}

              <button
                className="btn btn-primary my-4 text-lg"
                type="submit"
                disabled={isLoggingIn}
              >
                {isLoggingIn ? "Is logging in..." : "Submit"}
              </button>

              {loginError && (
                <div className="card bg-error text-error-content">
                  <div className="card-body items-center">
                    <p className="card-title">Login Error</p>
                    <p>{loginError.message}</p>
                  </div>
                </div>
              )}
            </fieldset>
          </form>
        </div>
      </main>
    </div>
  );
};

export { LoginForm };
