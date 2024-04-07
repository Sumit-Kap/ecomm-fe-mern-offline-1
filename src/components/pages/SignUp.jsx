import { BASE_URL } from "../hooks/useApi";
import React from "react";
import { useNavigate } from "react-router";

const SignUp = () => {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
    const [confirmPassword, setConfirmPassword] = React.useState();
    const navigate = useNavigate();
  const register = async () => {
    try {
        const requestPayload = {
            "email": email,
            "password": password,
            "confirmPassword": confirmPassword
      }
      const data = await fetch(`${BASE_URL}/api/v1/user/signUp`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(requestPayload),
      });
        await data.json();
        navigate('/sign-in')
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex w-full h-full justify-center items-center ">
      <div className=" flex flex-col justify-center items-center w-[400px] h-[400px] border-2 border-solid border-fuchsia-800 shadow-md">
        <input
          type="text"
          className="w-80 rounded-lg h-10 border-2 mt-5 placeholder:font-extralight text-2xl"
          placeholder="Enter your email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          className="w-80 rounded-lg h-10 border-2 mt-5 placeholder:font-extralight text-2xl"
          placeholder="Enter your password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          type="password"
          className="w-80 rounded-lg h-10 border-2 mt-5 placeholder:font-extralight text-2xl"
          placeholder="Confirm password"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
        <button
          className="w-80 h-10 border-2 mt-5 bg-gray-600"
          onClick={register}
        >
          Sign up
        </button>
        <a href="#" className="w-80 h-10 mt-5 text-center underline">
          Sign in
        </a>
      </div>
    </div>
  );
};

export default SignUp;
