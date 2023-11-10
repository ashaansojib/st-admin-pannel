import { FaAngleDown, FaAngleUp, FaBars, FaBell, FaFly } from "react-icons/fa";
import React, { useContext, useState } from 'react';
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import { AuthContext } from "../../auth/AuthProvider";
const Header = () => {
    const [arrow, setArrow] = useState(true);
    const {logOut} = useContext(AuthContext);
    const handleLogout = () =>{
        logOut()
        setArrow(!arrow)
    }
    return (
        <div className="flex gap-3 justify-between items-center p-2">
            <div className="md:flex gap-3 items-center hidden">
                <button className="p-3 bg-blue-600 text-white rounded-md"><FaBars /></button>
                <input type="text" disabled={true} name="" id="" placeholder="Search Here..." className="p-2 border rounded-md w-full bg-slate-100" />
            </div>
            <div>
            <h2 className='text-xl font-semibold'><Link to="/">ST Manage App</Link></h2>
            <p className='text-sm text-blue-600'>Customer Lists</p>
            </div>
            <div className="flex justify-end items-center gap-4">
                <div className="md:flex hidden gap-2">
                    <button className="p-3 rounded-full bg-slate-100"><FaFly /></button>
                    <button className="p-3 rounded-full bg-slate-100"><FaBell /></button>
                </div>
                <div onClick={() => setArrow(!arrow)} className="flex gap-1 items-center cursor-pointer relative">
                    <Avatar alt="Remy Sharp" src="/mypp-circle.png" />
                    <div className="md:block hidden">
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
                <div className={`absolute bg-gray-50 top-16 border ${arrow ? 'hidden' : 'block'}`}>
                    <div className="py-2 px-3 flex items-center gap-2">
                        <Avatar alt="No Image" src="/mypp-circle.png" />
                        <div>
                            <p className="font-medium">Ashaduzzaman</p>
                            <span className="text-blue-600 text-center text-[13px]">Administrator</span>
                        </div>
                    </div>
                    <Link onClick={()=> setArrow(!arrow)} className="p-2 font-medium text-gray-700 w-full inline-block border-t hover:bg-white">My Profile</Link>
                    <Link to="/create-customer" onClick={()=> setArrow(!arrow)} className="p-2 font-medium text-gray-700 w-full inline-block border-t hover:bg-white">Add Customer</Link>
                    <Link onClick={handleLogout} className="p-2 font-medium text-gray-700 w-full inline-block border-t hover:bg-white">Logout</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;