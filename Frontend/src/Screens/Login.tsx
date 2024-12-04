import { useState, useEffect } from "react";
import LoginForm from "../Components/Auth/LoginForm";
import ConfirmCodeForm from "../Components/Auth/ConfirmCodeForm";
import ResetPasswordForm from "../Components/Auth/ResetPasswordForm";
import ForgotPasswordForm from "../Components/Auth/ForgotPasswordForm";
import AlreadyLoggedInForm from "../Components/Auth/AlreadyLoggedInForm";

const Login = () => {
  const [currentView, setCurrentView] = useState<
    | "login"
    | "forgotPassword"
    | "confirmCode"
    | "resetPassword"
    | "alreadyLogged"
  >("login");

  const changeView = (
    view:
      | "login"
      | "forgotPassword"
      | "confirmCode"
      | "resetPassword"
      | "alreadyLogged"
  ) => {
    setCurrentView(view);
  };

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <>
      {isLoggedIn ? (
        <AlreadyLoggedInForm />
      ) : (
        <div className="bg-gradient-to-br from-[#18ffff] to-[#187272] h-screen w-full flex justify-center items-center">
          <div className="p-5 bg-white shadow-[0_0px_60px_0px_rgba(0,0,0,0.4)] lg:flex rounded-lg">
            {currentView === "login" && (
              <LoginForm
                onForgotPassword={() => changeView("forgotPassword")}
              />
            )}
            {currentView === "forgotPassword" && (
              <ForgotPasswordForm
                handleBackToDefault={() => changeView("login")}
              />
            )}
            {currentView === "confirmCode" && (
              <ConfirmCodeForm
                handleBackToDefault={() => changeView("login")}
                handleResetPassword={() => changeView("resetPassword")}
              />
            )}
            {currentView === "resetPassword" && (
              <ResetPasswordForm
                onPasswordChanged={() => changeView("login")}
              />
            )}
            <div className="hidden lg:block">
              <img src="/zbc_black.jpg" alt="ZBC" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
