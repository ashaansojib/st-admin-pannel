import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import React, { useContext, useState } from 'react';
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import { AuthContext } from "../../auth/AuthProvider";
const Header = () => {
    const [arrow, setArrow] = useState(true);
    const { logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
        setArrow(!arrow)
    }
    return (
        <div className="header-container">
            <div>
                <h2 className='text-xl font-semibold'><Link to="/">ST Manage App</Link></h2>
                <p className='text-sm text-blue-600'>Customer Lists</p>
            </div>
            <div className="header-profile">
                <div onClick={() => setArrow(!arrow)} className="profile">
                    <Avatar alt="Error Img" src="/mypp-circle.png" />
                    <span className="text-gray-600">
                        {
                            arrow ? <FaAngleUp /> : <FaAngleDown />
                        }
                    </span>
                </div>
                {/* profile dropdown */}
                <div onClick={() => setArrow(!arrow)} className={`absolute bg-gray-200 w-2/3 z-10 top-16 right-0 border ${arrow ? 'hidden' : 'block'}`}>
                    <div className="profile-avater">
                        <Avatar alt="No Image" src="/mypp-circle.png" />
                        <div>
                            <p className="font-medium">Ashaduzzaman</p>
                            <Link to="/" className="text-blue-600 text-center text-[13px]">Admin Area</Link>
                        </div>
                    </div>
                    <Link to="/manage-users" className='profile-link'>Manage User</Link>
                    <Link to="/manage-customer" className='profile-link'>Manage Customer</Link>
                    <Link to="/create-customer" className='profile-link'>Add Customer</Link>
                    <Link onClick={handleLogout} className='profile-link'>Logout</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;