import { useAuth0 } from "@auth0/auth0-react";
import Header1 from "./Header1";
import styled from "styled-components";
import Footer from "./Footer";

const Recuiter = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <Div1>
        <Header1 />
        <Container>
        {isAuthenticated && (
            <Div>
              <Title>Welcome <span>{user.given_name}</span> to Montreal Walking Admin Panel
              {/* <img src={logo}/>  */}
              </Title>
              <Detail>Want to post new job? <a href="/form">Add Job</a></Detail>
       <Detail>Want to post update or delete job? <a href="/profile">Go to profile</a></Detail>
            </Div>
          )}
          </Container>
          <Footer/>
          </Div1>
  );
}
// const Div = styled.div`
// height:58vh;
// `;
const Detail = styled.p`
  font-size:18px;
  padding:10px 50px;
  text-align:center;
  line-height:20px;
`;
const Container= styled.div`
box-shadow:rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
border-radius: 20px;
padding:35px;
background:white;
margin:20px 300px 20px 300px;
`;
const Title = styled.h2`
    font-size:38px;
    // color:black;
    font-family:Times New Roman;
    // margin-bottom:-100px;
    // padding-bottom:-100px;

    img{
      height:20%;
      width:100%;
      margin-bottom:-100px;
      padding-bottom:-100px;
    }
`;
const Div1 = styled.div`
  
`;
const Div = styled.div`
height:42vh;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
text-align:justify;
padding:50px;

  span{
    font-size:40px;
    color:#ff8000;
  }
`;
export default Recuiter;