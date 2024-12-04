import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../Components/Auth/LoginForm";
import ConfirmCodeForm from "../Components/Auth/ConfirmCode";
import ForgotPasswordForm from "../Components/Auth/ForgotPasswordForm";
import ResetPasswordForm from "../Components/Auth/ResetPasswordForm";

const Login = () => {
  const [currentView, setCurrentView] = useState<
    "login" | "forgotPassword" | "confirmCode" | "resetPassword"
  >("login");
  const navigate = useNavigate();

  const handleUserLogged = () => {
    navigate("/");
  };

  const changeView = (view: "login" | "forgotPassword" | "confirmCode" | "resetPassword") => {
    setCurrentView(view);
  };

  return (
    <div className="bg-gradient-to-br from-[#18ffff] to-[#187272] h-screen w-full flex justify-center items-center">
      <div className="p-5 bg-white shadow-[0_0px_60px_0px_rgba(0,0,0,0.4)] lg:flex rounded-lg">
        {currentView === "login" && (
          <LoginForm
            onLogin={handleUserLogged}
            onForgotPassword={() => changeView("forgotPassword")}
          />
        )}
        {currentView === "forgotPassword" && (
          <ForgotPasswordForm
            handleBackToDefault={() => changeView("login")}
            handleResetPassword={() => changeView("confirmCode")}
          />
        )}
        {currentView === "confirmCode" && (
          <ConfirmCodeForm
            handleBackToDefault={() => changeView("login")}
            handleResetPassword={() => changeView("resetPassword")}
          />
        )}
        {currentView === "resetPassword" && (
          <ResetPasswordForm onPasswordChanged={() => changeView("login")} />
        )}
        <div className="hidden lg:block">
          <img src="/zbc_black.jpg" alt="ZBC" />
        </div>
      </div>
    </div>
  );
};

export default Login;
