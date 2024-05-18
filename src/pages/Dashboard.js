import { useAuth0 } from "@auth0/auth0-react";

const Dashboard = () => {

  const { logout } = useAuth0(); //logout function ends the session

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };
  return (
    <div>
       <h1>Dashboard</h1>
       <button onClick={handleLogout}>Log Out</button>
    </div>
  )
}

export default Dashboard
