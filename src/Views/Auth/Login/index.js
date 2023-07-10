import React, { useState } from "react";
import { messageConfiguration, setLocalStorageItem } from "../../../Utils";
import { Images } from "../../../Controller/image";
import { adminLogin } from "../../../services/Auth";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const Login = () => {
  const [fields, setFields] = useState({
    UserName: "",
    Password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };
  const handleLogin = () => {
    adminLogin(fields)
      .then((res) => {
        if (res?.responseCode >= 200 && res?.responseCode < 300) {
          setLocalStorageItem("userDetails", res.data);
          navigate("/dashboard");
        } else {
          message.open(messageConfiguration("error", res?.message??"Unable to Login", 3));
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="flex mx-5 justify-center h-screen items-center">
        <div className="p-10  bg-[#000] flex flex-col justify-center items-center">
          <img src={Images.pinLogo} alt="loginLogo" />
          <div className="input_fields mt-4 w-full">
            <input
              type="text"
              name="UserName"
              value={fields.UserName}
              onChange={handleChange}
              className="mb-4 w-full p-2 focus:outline-none bg-transparent text-[#fff] border-b border-white text-sm"
              placeholder="User Name"
            />
            <br />
            <input
              type="password"
              name="Password"
              value={fields.Password}
              onChange={handleChange}
              className="mb-4 w-full p-2 focus:outline-none bg-transparent text-[#fff] border-b border-white text-sm"
              placeholder="Password"
            />
          </div>
          <p
            onClick={handleLogin}
            className="bg-[#fff] cursor-pointer h-10 flex justify-center items-center font-bold w-full text-center text-black rounded-sm"
          >
            Login
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
