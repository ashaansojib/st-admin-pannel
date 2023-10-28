import { Disclosure } from '@headlessui/react';
import React from 'react';
import { FaAngleUp, FaFileAlt, FaPen } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Customers = ({ item }) => {
    const { customerName, _id } = item;

    return (
        <Disclosure>
            {({ open }) => (
                <>
                    <Disclosure.Button className="flex w-full justify-between items-center py-2 border-b">
                        <span className='font-medium uppercase'>{customerName}</span>
                        <FaAngleUp
                            className={`${open ? 'rotate-180 transform' : ''
                                }text-purple-500`}
                        />
                    </Disclosure.Button>
                    <Disclosure.Panel className="pb-2 text-sm text-gray-500">
                        <NavLink className={({ isActive }) => isActive ? 'active' : 'default'} to={`/all-products/${_id}`}>
                            <div className='flex items-center gap-3 font-medium p-2 hover:bg-slate-100'>
                                <FaFileAlt />
                                Product List
                            </div>
                        </NavLink>
                        <NavLink to={`/add-product/${_id}`} className={({ isActive }) => isActive ? 'active' : 'default'}>
                            <div className='flex items-center gap-3 font-medium p-2 hover:bg-slate-100'>
                                <FaPen />
                                Add Product
                            </div>
                        </NavLink>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default Customers;