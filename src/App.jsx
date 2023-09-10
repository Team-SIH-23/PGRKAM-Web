import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { AuthProvider } from "@/context/AuthProvider";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";
import Home from "./pages/home/Home";
import Signin from "./pages/authModule/signin/Signin";
import Signup from "./pages/authModule/signup/Signup";
import NotFound from "./pages/notFound/NotFound";
import ForgotPassword from "./pages/authModule/forgotPassword/ForgotPassword";
import EmailVerification from "./pages/authModule/emailVerification/EmailVerification";
import UserProfile from "./pages/authModule/userProfile/UserProfile";
import Contact from "./pages/contact/Contact";
import Dashboard from "./pages/dashboard/Dashboard";
import UserManual from "./pages/userManual/UserManual";
import ArmedForces from "./pages/employmentServicesModule/armedForces/ArmedForces";
import Councelling from "./pages/employmentServicesModule/counselling/Counselling";
import Jobs from "./pages/employmentServicesModule/jobs/Jobs";
import JobsForWomen from "./pages/employmentServicesModule/jobsForWomen/JobsForWomen";
import jobsForPwd from "./pages/employmentServicesModule/jobsForPwd/jobsForPwd";
import LocalServices from "./pages/employmentServicesModule/localServices/LocalServices";
import SelfEmployment from "./pages/employmentServicesModule/selfEmployment/SelfEmployment";
import SkillTraining from "./pages/employmentServicesModule/skillTraining/SkillTraining";
const App = () => {
  return (
    <ChakraProvider>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </ChakraProvider>
  );
};

const AppRoutes = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={isAuthenticated ? <Home /> : <Signin />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/accountVerification" element={<EmailVerification />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/userManual" element={<UserManual />} />
      <Route path="/armedForces" element={<ArmedForces />} />
      <Route path="/councelling" element={<Councelling />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/jobsForWomen" element={<JobsForWomen />} />
      <Route path="/jobsForPwd" element={<jobsForPwd />} />
      <Route path="/localServices" element={<LocalServices />} />
      <Route path="/selfEmployment" element={<SelfEmployment />} />
      <Route path="/skillTraining" element={<SkillTraining />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
