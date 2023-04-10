import React from "react";

// import components
import Header from "../components/Form/FormHeader";
import Login from "../components/Login";

const LoginPage = () => {
  return (
    <main className="main flex items-center justify-center">
      <div className="grid gap-8">
        <Header
          heading="Login to your account"
          paragraph="Don't have an account yet? "
          linkName="Signup"
          linkUrl="/signup"
        />
        <Login />
      </div>
    </main>
  );
};

export default LoginPage;