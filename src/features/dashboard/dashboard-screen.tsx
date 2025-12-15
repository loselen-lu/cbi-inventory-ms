import { useAuth } from "../auth/use-auth";

const Dashboard = () => {
  const { logout, isLoggingOut, logoutError } = useAuth();

  if (isLoggingOut) {
    return <p>Is logging out...</p>;
  }

  return (
    <main>
      <h1>Hello this is Dashboard</h1>

      <button onClick={() => logout()}>Logout</button>
      {logoutError && <p>{logoutError.message}</p>}
    </main>
  );
};

export { Dashboard };
