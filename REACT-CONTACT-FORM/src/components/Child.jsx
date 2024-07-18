import React, { useContext } from "react";
import { ContextData } from "../store/ContextData";

const Child = () => {
  const { formData } = useContext(ContextData);

  return (
    <div>
      <h2>Form Data:</h2>
      <p>Username: {formData.username}</p>
      <p>Password: {formData.password}</p>
    </div>
  );
};

export default Child;
