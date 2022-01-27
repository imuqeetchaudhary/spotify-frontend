import React, { useState } from "react";
import RegisterScreen from "../../Screens/RegisterScreen";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { userRegister, userLogin } from "../../api/user";

const RegisterContainer = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userObj = {
      name,
      email,
      password,
    };

    try {
      const registerRes = await userRegister(userObj);

      const loginRes = await userLogin(userObj);

      const token = loginRes.data.token;
      localStorage.setItem("token", token);

      toast(`${registerRes.data.message}`);
      setTimeout(() => navigate("/"), 500);
    } catch (err) {
      return toast(`${err.response.data.message}`);
    }
  };

  return (
    <div>
      <RegisterScreen
        name={name}
        handleNameChange={handleNameChange}
        email={email}
        handleEmailChange={handleEmailChange}
        password={password}
        handlePasswordChange={handlePasswordChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default RegisterContainer;
