import React from "react";

const FormExtra = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <input
          id="remember-me"
          name="remember-me"
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300 text-green-600  focus:ring-green-700"
        />
        <label
          htmlFor="remember-me"
          className="ml-2 block text-sm text-gray-900"
        >
          Remember me
        </label>
      </div>

      <div className="text-sm">
        <a
          href="#"
          className="font-medium text-green-600 hover:text-green-700 hover:underline"
        >
          Forgot your password?
        </a>
      </div>
    </div>
  );
};

export default FormExtra;
