import { FaBars, FaBell, FaFly } from "react-icons/fa";
import React from 'react';
import { Avatar } from "@mui/material";
const Header = () => {

    return (
        <div className="flex gap-3 justify-between items-center">
            <div className="flex gap-3 items-center">
                <button className="p-3 bg-blue-600 text-white rounded-md"><FaBars /></button>
                <input type="text" name="" id="" placeholder="Search Here..." className="p-2 border rounded-md w-full bg-slate-100" />
            </div>
            <div className="flex justify-end items-center gap-4">
                <div className="flex gap-2">
                    <button className="p-3 rounded-full bg-slate-100"><FaFly /></button>
                    <button className="p-3 rounded-full bg-slate-100"><FaBell /></button>
                </div>
                <div className="flex gap-1 items-center">
                    <Avatar alt="Remy Sharp" src="/mypp-circle.png" />
                    <div>
                        <p className="font-medium">Ashaduzzaman</p>
                        <span className="text-blue-600 text-center text-[13px]">Administrator</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;