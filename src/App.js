import { useEffect, useState } from "react";
import "./App.css";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import MailingSystem from "./pages/MailingSystem/MailingSystem";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import MainLayout from "./components/layout/MainLayout/MainLayout";
import EmailTemplates from "./pages/EmailTemplates/EmailTemplates";

function App() {
  const navigate = useNavigate();

  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const accessToken = localStorage?.getItem(`user`);
    if (!accessToken) {
      navigate("/login");
    }
  }, [localStorage]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          exact
          element={<Navigate to={"/login"}></Navigate>}
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>

        <Route
          path="*"
          element={
            <MainLayout>
              <Routes>
                <Route
                  path="/dashboard"
                  element={<Dashboard></Dashboard>}
                ></Route>
                <Route
                  path="/emails"
                  element={<MailingSystem></MailingSystem>}
                ></Route>
                <Route
                  path="/email-templates"
                  element={<EmailTemplates></EmailTemplates>}
                ></Route>
                <Route path="*" element={<NotFound></NotFound>}></Route>
              </Routes>
            </MainLayout>
          }
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
