import { supabase } from "@/lib/supabase";
import { LoginInput } from "./auth.types";

const getEmail = async ({ username }: { username: string }) => {
  const { data, error } = await supabase
    .from("users")
    .select("username, email")
    .eq("username", username)
    .single();

  if (error) {
    throw error;
  } else {
    return data.email;
  }
};

const login = async ({ username, password }: LoginInput) => {
  const email = await getEmail({ username: username });
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    throw error;
  }

  return data;
};

const getCurrentUser = async () => {
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (error) {
    throw error;
  }

  return session ? session.user : null;
};

const logout = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw error;
  }
};

export { login, getCurrentUser, logout };
