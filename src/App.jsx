import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Authentication from "./pages/Authentication";
import CreateProfile from "./pages/CreateProfile";
import EmailVerification from "./pages/EmailVerification";
import UserIntent from "./pages/UserIntent";

import "./stylesheets/app.css";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Authentication />} />
          <Route path="/create-profile" element={<CreateProfile />} />
          <Route path="/user-intent" element={<UserIntent />} />
          <Route path="/email-verification" element={<EmailVerification />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
