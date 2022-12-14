import Faq from "react-faq-component";
import Footer from "./Footer";
import Header from "./Header";
import styled from "styled-components";
import ScrollButton from "./ScrollButton";

//array of object to display questions(title) and answer(content)
const data = {
    title: "FAQ (Frequently Asked Questions)",
    rows: [
        {
            title: "What is Montreal Walking?",
            content: `It is a platform where the job seeker can create an account and find there their dream job. They can also find the job through maps. They can select the pin on the google map to get the details of the job that suits them. Also, it is a platform where the recuiters can post their requirements and help the people in finding the jobs.`,
              
        },
        {
            title: "Is my account secure?",
            content: `It is a platform where the job seeker can create an account and find there their dream job. They can also find the job through maps. They can select the pin on the google map to get the details of the job that suits them. Also, it is a platform where the recuiters can post their requirements and help the people in finding the jobs.`,
              
        },
        {
            title: "What's the best part of this website?",
            content:
                "It's easy to find the jobs because it shows you a location in the map.",
        },
        {
            title: "What types of jobs are posted?",
            content: `On this site, the job posted are less professional and that require less technical knowledge. They can schedule the job according to their other schedules. That gives you flexibilty in work.`,
        },
        {
            title: "What is the salary package?",
            content: "The salary ranges from minimum to 30$ per hour. Also, some jobs gives you an opportunity to work more hours than usual as well as provides some benefits.",
        },
        {
            title: "How to use it?",
            content: `It is a platform where the job seeker can create an account and find there their dream job. They can also find the job through maps. They can select the pin on the google map to get the details of the job that suits them. Also, it is a platform where the recuiters can post their requirements and help the people in finding the jobs.`,
              
        },
        {
            title: "How can I apply from this site?",
            content:
                "It's easy to find the jobs because it shows you a location in the map.",
        },
        {
            title: "How does it help you?",
            content: `On this site, the job posted are less professional and that require less technical knowledge. They can schedule the job according to their other schedules. That gives you flexibilty in work.`,
        },
        {
            title: "What's the purpose?",
            content: "The salary ranges from minimum to 30$ per hour. Also, some jobs gives you an opportunity to work more hours than usual as well as provides some benefits.",
        },
        {
            title: "How can I keep my account secure?",
            content: `It is a platform where the job seeker can create an account and find there their dream job. They can also find the job through maps. They can select the pin on the google map to get the details of the job that suits them. Also, it is a platform where the recuiters can post their requirements and help the people in finding the jobs.`,
              
        },
        {
            title: "What is the salary package?",
            content: "The salary ranges from minimum to 30$ per hour. Also, some jobs gives you an opportunity to work more hours than usual as well as provides some benefits.",
        },
    ],
};
//little styling for title 
const styles = {
    titleTextColor: '#480987',
    rowTitleColor: 'blue',
    rowContentTextSize: '16px',
    rowContentPaddingBottom: '10px',
    rowContentPaddingLeft: '50px',  
};

const config = {
    animate: true,
    arrowIcon: "V",
    openOnload: 0,
    expandIcon: "+",
    collapseIcon: "-",
};
//returns the question and answer for the FAQ page
const FAQ = () => {
    return (
        <Div>
            <Header />
            <Wrapper>
            <Faq 
                data={data}
                styles={styles}
                config={config}
            />
           
            </Wrapper>
            <ScrollButton/>
            <Footer/>
            
        </Div>
    );
}
const Wrapper = styled.div`
   margin:10px 100px;
   box-shadow:rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
border-radius: 20px;
padding:15px;
background:white;

&:hover:enabled {
    cursor: pointer;
    transition: all 0.5s ease;
    transform: scale(1.05);
}
`;
 const Div = styled.div`
    
 `;
export default FAQ;