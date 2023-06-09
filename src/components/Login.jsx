import React, { useState } from "react";

// import components
import FormInput from "./form/FormInput";
import FormExtra from "./form/FormExtra";
import FormAction from "./form/FormAction";
import { loginFields } from "../constants/FormFields";

// variables fields login
const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

const Login = () => {
  const [loginState, setLoginState] = useState(fieldsState);

  // handle change form login
  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      {fields.map((field) => (
        <FormInput
          key={field.id}
          handleChange={handleChange}
          value={loginState[field.id]}
          labelText={field.labelText}
          labelFor={field.labelFor}
          id={field.id}
          name={field.name}
          type={field.type}
          isRequired={field.isRequired}
          placeholder={field.placeholder}
        />
      ))}
      <FormExtra />
      <FormAction text="Login" handleSubmit={handleSubmit} />
    </form>
  );
};

export default Login;
