"use client";

import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Spinner } from "@/components/ui/spinner";
import { LoginForm } from "@/features/auth/login-form";
import { useAuth } from "@/features/auth/use-auth";
import { Dashboard } from "@/features/dashboard/dashboard-screen";
import { UserX } from "lucide-react";

const Home = () => {
  const { user, isUserLoading, userError } = useAuth();

  if (isUserLoading) {
    return (
      <div className="min-h-dvh flex items-center">
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Spinner />
            </EmptyMedia>
            <EmptyTitle>Loading...</EmptyTitle>
          </EmptyHeader>
        </Empty>
      </div>
    );
  }

  if (userError) {
    return (
      <div className="min-h-dvh flex items-center">
        <Empty>
          <EmptyHeader className="text-destructive">
            <EmptyMedia variant="icon">
              <UserX />
            </EmptyMedia>
            <EmptyTitle>Auth Error</EmptyTitle>
            <EmptyDescription>Please refresh the page.</EmptyDescription>
          </EmptyHeader>
        </Empty>
      </div>
    );
  }

  if (user) {
    return <Dashboard />;
  }

  return <LoginForm />;
};

export default Home;
