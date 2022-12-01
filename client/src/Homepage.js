import { useAuth0 } from "@auth0/auth0-react";
import Header from "./Header";
import image from "./images/newimage.png";
import styled from "styled-components";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Homepage = () => {
    const { user, isAuthenticated} = useAuth0();

    return (
        <>
        <Header />
        <Sidebar/>
        {isAuthenticated && (
            <Div>
              <p>Welcome <span>{user.given_name}</span> to Montreal Walking </p>
              <p>Want to view all job? <a href="/alljobs">View all Jobs</a></p>
              <p>Want to view the jobs that are posted today? <a href="/todayjobs">View Today's Job</a></p>
            </Div>
          )}
          <Footer/>
          </>
    );
}
const Div = styled.div`
background-image:url(${image});
min-height:100%;
overflow:hidden;
background-size:cover;
box-sizing:border-box;
`;
export default Homepage;