import { supabase } from "@/lib/supabase";

const getEmail = async ({ username }: { username: string }) => {
  const { data, error } = await supabase
    .from("users")
    .select("username, email")
    .eq("username", username);

  if (error) {
    throw error;
  } else if (data.length > 1) {
    throw new Error(
      "The username is not unique. This is a bug; please report to the developer."
    );
  } else if (data.length === 0) {
    throw new Error("User not found.");
  } else {
    return data[0].email;
  }
};

export { getEmail };
