import React from "react";

const FormAction = ({
  handleSubmit,
  type = "Button",
  action = "submit",
  text,
}) => {
  return (
    <>
      {type === "Button" ? (
        <button
          type={action}
          className="group relative mt-6 flex h-[52px] w-full items-center justify-center rounded-md border border-transparent bg-green-600 font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2"
          onSubmit={handleSubmit}
        >
          {text}
        </button>
      ) : null}
    </>
  );
};

export default FormAction;
