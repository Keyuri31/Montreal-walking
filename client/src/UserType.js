import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import image from "./images/newimage.png";
import styled from "styled-components";

const UserType = () => {
    const { user} = useAuth0();
    const [type, setType]= useState("");
    const [state, setState] = useState(null);
    const navigate = useNavigate();
    // console.log("usertype",user)

    const handleChange = (value) => {
        console.log("value", value)
        setType(value);
}

    const handleSubmit = (e) => {
            e.preventDefault();
            
                fetch("/api/login", {
                      method: "POST",
                      headers: {
                          "Accept": "application/json",
                          "Content-Type": "application/json",
                      },
                      body: JSON.stringify({user,type})
                  })
                  .then(res => res.json())
                  .then((data) => {
                      // console.log(data)
                      console.log("type",type)
                      if(type === "usertype"){
                            navigate('/user');
                        }else{
                            navigate('/recuiter');
                        }
                  })
                  .catch((error) => {
                      window.alert(error);
                  })
                }
                
             
            // fetch("/api/login", {
            //     method: "PATCH",
            //     headers: {
            //         "Accept": "application/json",
            //         "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify({user,type})
            // })
            // .then(res => res.json())
            // .then((data) => {
            //     // console.log(data)
            // })
            // .catch((error) => {
            //     window.alert(error);
            // })
            // console.log("type", type)
            // // console.log("target value",e.target.name)
            // if(type === "usertype"){
            //     navigate('/user');
            // }else{
            //     navigate('/recuiter');
            // }

            //get all the login user details
  
  // console.log("statte dtata",state)


  
      //check if the current user login already exist in the db if not create one new entry into db
      
       
      
        console.log(user)
    return (
        <Div>
            <form onSubmit={e=>handleSubmit(e)}>
                <input type="radio" name="usertype" value={type} onChange={(e)=>{handleChange(e.target.name)}}/>Job Seeker
                <input type="radio" name="recuitertype" value={type} onChange={(e)=>{handleChange(e.target.name)}}/>Recuiter
                <button type="submit">Submit</button>
            </form>
        </Div>
    );
}
 const Div = styled.div`
 background-image:url(${image});
 min-height:100%;
 overflow:hidden;
 background-size:cover;
 box-sizing:border-box;
 `;
export default UserType;