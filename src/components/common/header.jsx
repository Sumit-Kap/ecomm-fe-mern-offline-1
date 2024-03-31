import React from "react";
import { appConstants } from "../../constants/appConstants";
import { useNavigate } from "react-router";

const Header = (props) => {
    // const { routes } = props;
    // console.log("printing ", routes);
    const navigate = useNavigate();
    return (
        <nav className="flex bg-zinc-400 w-full h-15 sticky">
            <div className="text-2xl p-2 m-5 float-left relative font-bold">Logo</div>
            <div className="flex flex-row-reverse w-full">
            {appConstants.routes.map((route, index) => (
                
                <div key={index} className="text-2xl p-2 m-5  font-bold cursor-pointer" onClick={() => {
                    navigate(route.path)
                    }}> {route.name} </div>
            ))}
        </div>
        </nav>
    )

};


export default Header;