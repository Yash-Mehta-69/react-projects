import React, { useState, useContext } from "react";
import Child from "./components/Child";
import { ContextData, ContextProvider } from "./store/ContextData";

function App() {
  const [localFormData, setLocalFormData] = useState({
    username: "",
    password: "",
  });

  const { updateFormData } = useContext(ContextData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLocalFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateFormData(localFormData);
    console.log(localFormData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={localFormData.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={localFormData.password}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <Child />
    </>
  );
}

export default App;
