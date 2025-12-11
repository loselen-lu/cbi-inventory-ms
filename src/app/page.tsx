"use client";

import { LoginForm } from "@/features/auth/LoginForm";
import { useAuth } from "@/features/auth/useAuth";
import { Dashboard } from "@/features/dashboard/DashboardScreen";

const Home = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (user) {
    return <Dashboard />;
  }

  return <LoginForm />;
};

export default Home;
