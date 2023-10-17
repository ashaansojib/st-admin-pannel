import { FaAngleDown, FaAngleUp, FaBars, FaBell, FaFly } from "react-icons/fa";
import React, { useState } from 'react';
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
const Header = () => {
    const [arrow, setArrow] = useState(true);

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
                <div onClick={() => setArrow(!arrow)} className="flex gap-1 items-center cursor-pointer relative">
                    <Avatar alt="Remy Sharp" src="/mypp-circle.png" />
                    <div>
                        <p className="font-medium">Ashaduzzaman</p>
                        <span className="text-blue-600 text-center text-[13px]">Administrator</span>
                    </div>
                    <span className="text-gray-600">
                        {
                            arrow ? <FaAngleUp /> : <FaAngleDown />
                        }
                    </span>
                </div>
                {/* profile dropdown */}
                <div className={`absolute top-16 bg-slate-50 border ${arrow ? 'hidden' : 'block'}`}>
                    <div className="py-2 px-3 flex items-center gap-2">
                        <Avatar alt="No Image" src="/mypp-circle.png" />
                        <div>
                            <p className="font-medium">Ashaduzzaman</p>
                            <span className="text-blue-600 text-center text-[13px]">Administrator</span>
                        </div>
                    </div>
                    <Link className="p-2 font-medium text-gray-700 w-full inline-block border-t hover:bg-white">My Profile</Link>
                    <Link className="p-2 font-medium text-gray-700 w-full inline-block border-t hover:bg-white">Inbox</Link>
                    <Link className="p-2 font-medium text-gray-700 w-full inline-block border-t hover:bg-white">Logout</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;