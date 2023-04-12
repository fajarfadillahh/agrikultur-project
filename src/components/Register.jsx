import React, { useState } from "react";

// import components
import FormInput from "./Form/FormInput";
import FormAction from "./Form/FormAction";
import { registerFields } from "../constants/FormFields";

// variables fields login
const fields = registerFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

const Register = () => {
  const [registerState, setRegisterState] = useState(fieldsState);

  // handle change form login
  const handleChange = (e) => {
    setRegisterState({ ...registerState, [e.target.id]: e.target.value });
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
          value={registerState[field.id]}
          labelText={field.labelText}
          labelFor={field.labelFor}
          id={field.id}
          name={field.name}
          type={field.type}
          isRequired={field.isRequired}
          placeholder={field.placeholder}
        />
      ))}
      <FormAction text="Create Account" handleSubmit={handleSubmit} />
    </form>
  );
};

export default Register;
