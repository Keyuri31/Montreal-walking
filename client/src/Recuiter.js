import { useAuth0 } from "@auth0/auth0-react";
import Header from "./Header";

const Recuiter = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <>
    <Header />
    {isAuthenticated && (
      <div>
        <p>Welcome <span>{user.given_name}</span> to Montreal Walking <span>Admin Panel</span></p>
        <p>Want to post new job? <a href="/form">Add Job</a></p>
        <p>Want to post update or delete job? <a href="/profile">Go to profile</a></p>
      </div>
    )}
    </>
  );
}
 
export default Recuiter;