import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import Profile from "./Profile";
import UserType from "./UserType";
import GlobalStyles from "./Globalstyles";
import Homepage from "./Homepage";
import Recuiter from "./Recuiter";
import { useAuth0 } from "@auth0/auth0-react";
import JobPostForm from "./JobPostForm";
import AllJobs from "./AllJobs";
import TodayJobs from "./TodayJobs";
import UpdateForm from "./UpdateForm";
import JobDetail from "./JobDetail";
import FAQ from "./FAQ";
import ContactUs from "./ContactUs";
import Sidebar from "./Sidebar";
import Resume from "./Resume";
import AdminAllJobs from "./AdminAllJobs";

const App = () => {
  const {isAuthenticated} = useAuth0();

  return (
   <>
    <GlobalStyles />
    <BrowserRouter>
      {isAuthenticated ? <Routes>
        <Route path="/" element= {<UserType />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/type" element={<UserType/>}/>
        <Route path="/recuiter" element={<Recuiter />}/>
        <Route path="/form" element={<JobPostForm />}/>
        <Route path="/logout" element= {<Logout />}/>
        <Route path="/updateform/:_id" element={<UpdateForm/>}/>
        <Route path="/adminalljobs" element={<AdminAllJobs />}/>
        
            <Route path="/alljobs" element={<AllJobs />}/>
            <Route path="/resume" element={<Resume />}/>
            <Route path="/todayjobs" element={<TodayJobs />}/>
            <Route path="/user" element={<Homepage />}/>
            <Route path="/userjob/:_id" element={<JobDetail/>}/>
            <Route path="/faq" element={<FAQ />}/>
            <Route path="/contact" element={<ContactUs />}/>
            <Route path="/sidebar" element={<Sidebar />}/>
          
      </Routes>
      : <Login />}
    </BrowserRouter>
   </>
  );
}

export default App;
