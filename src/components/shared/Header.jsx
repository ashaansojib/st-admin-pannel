import { FaBars, FaBell, FaFly } from "react-icons/fa";
import React from 'react';

const Header = () => {

    return (
        <div className="flex gap-3 items-center">
            <button className="p-3 bg-blue-600 text-white rounded-md"><FaBars /></button>
            <div>
                <input type="text" name="" id="" placeholder="Search Here..." className="p-2 border rounded-md w-full bg-slate-100" />
            </div>
            <div>
                <div>
                    <button className="p-3 rounded-full bg-slate-100"><FaFly /></button>
                    <button className="p-3 rounded-full bg-slate-100"><FaBell /></button>
                </div>
            </div>
        </div>
    );
};

export default Header;