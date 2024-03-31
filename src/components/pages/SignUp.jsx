import React from "react";

const SignUp = () => {
    return (
            <div className="flex w-full h-full justify-center items-center ">
                <form method="POST" action="#" className=" flex flex-col justify-center items-center w-[400px] h-[400px] border-2 border-solid border-fuchsia-800 shadow-md">
                    <input type="text" className="w-80 rounded-lg h-10 border-2 mt-5 placeholder:font-extralight text-2xl"  placeholder="Enter your email" onChange={()=>{}} />
                    <input type="password" className="w-80 rounded-lg h-10 border-2 mt-5 placeholder:font-extralight text-2xl" placeholder="Enter your password" onChange={() => { }} />
                    <input type="password" className="w-80 rounded-lg h-10 border-2 mt-5 placeholder:font-extralight text-2xl"  placeholder="Confirm password" onChange={()=>{}} />
                    <button className="w-80 h-10 border-2 mt-5 bg-gray-600">Sign up</button>
                    <a href="#" className="w-80 h-10 mt-5 text-center underline">Sign in</a>
                </form>
            </div>
        )
};

export default SignUp;