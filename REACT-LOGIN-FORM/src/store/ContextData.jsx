import React, { createContext, useState } from "react";

const ContextData = createContext();

const ContextProvider = ({ children }) => {
  
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const updateFormData = (newData) => {
    setFormData(newData);
  };

  return (
    <ContextData.Provider value={{ formData, updateFormData }}>
      {children}
    </ContextData.Provider>
  );
};

export { ContextData, ContextProvider};
