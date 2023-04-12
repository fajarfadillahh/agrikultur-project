import React from "react";

// import components
import Header from "../components/Form/FormHeader";
import Register from "../components/Register";

const RegisterPage = () => {
  return (
    <main className="main flex items-center justify-center">
      <div className="grid w-[460px] gap-8">
        <Header
          heading="Register to create an account"
          paragraph="Already have an account?"
          linkName="Login"
          linkUrl="/login"
        />
        <Register />
      </div>
    </main>
  );
};

export default RegisterPage;
