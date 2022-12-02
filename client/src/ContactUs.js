import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

const ContactUs = () => {
    const [formStatus, setFormStatus] = useState('Send')
    const onSubmit = (e) => {
      e.preventDefault()
      setFormStatus('Submitted')
      const { name, email, message } = e.target.elements
      let conFom = {
        name: name.value,
        email: email.value,
        message: message.value,
      }
      window.alert("Successfully submitted!!!");
      
    }

    return (
        <>
        <Header/>
        <Container>
        <Div>
           
          <Form onSubmit={onSubmit}>
          <h2>Connect with us !!</h2>
            <div >
              <label htmlFor="name">Name: </label>
              <input type="text" id="name" required />
            </div>
            <div>
              <label htmlFor="email">Email: </label>
              <input type="email" id="email" required />
            </div>
            <div>
              <label htmlFor="message"> Message:  </label>
              <textarea id="message" required rols="20" cols="30"/>
            </div>
            <button type="submit"> {formStatus}</button>
          </Form>
      </Div>
        </Container>
        <Footer/>
        </>
    );
}
const Div = styled.div`
  width:50%;
    display:flex;
    justify-content:center;
    box-shadow:rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
border-radius: 20px;
padding:25px 40px;
background:white;
// margin:20px 0 20px 0;
text-align:justify;
line-height:30px;
`;
const Form = styled.form`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-content:center;

    input[type=text] {
      padding:5px;
      border:0;
      box-shadow:0 0 15px 4px rgba(0,0,0,0.09);
      border-radius:5px;
      margin-left:2px;
      margin-bottom:5px;
    }
    input[type=email] {
      padding:5px;
      border:0;
      box-shadow:0 0 15px 4px rgba(0,0,0,0.09);
      border-radius:5px;
      margin-left:2px;
    }
    textarea{
      padding:5px;
      border:0;
      box-shadow:0 0 15px 4px rgba(0,0,0,0.09);
      border-radius:5px;
      margin-left:2px;
    }

    h2{
      padding:10px;
      text-align:center;
      font-size:25px;

    }
    button{
      display:flex;
      justify-content: center;
      background-color: #ff8000;
      border: none;
      padding: 10px;
      border-radius: 5px;
      width: 150px;
      color: white;
      font-weight:bold;
      font-size:15px;
      font-family: 'Times New Roman', Times, serif;
      box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
      letter-spacing: 5px;
      margin-top: 20px;
      margin-bottom:10px;
      &:hover:enabled {
          cursor: pointer;
          transition: all 0.5s ease;
          transform: scale(1.05);
          background-color: white;
          color:#400080;
          font-weignt:bold;
      }
`;
const Container = styled.div`
height:55vh;
display:flex;
    flex-direction:column;
    justify-content:center;
    align-content:center;
    margin:20px 400px;
`;
export default ContactUs;