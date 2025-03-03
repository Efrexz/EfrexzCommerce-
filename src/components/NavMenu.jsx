import { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { GlobalContext } from '@context/GlobalContext';
import ExitIcon from '@assets/exitCartArrow.svg?react'
import HomeIcon from '@assets/homeIcon.svg?react';
import OrdersListIcon from '@assets/ordersList.svg?react';
import CartShopIcon from '@assets/cartShop.svg?react';
import PropTypes from 'prop-types';

function NavMenu({ setIsMobileMenuOpen }) {
    const [isOpen, setIsOpen] = useState(true);
    const { cartProducts, isCheckoutMenuOpen, setIsCheckoutMenuOpen, setIsProductDetailOpen, savedOrders } = useContext(GlobalContext);

    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

            <div
                className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform ${isOpen ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-300 z-50`}
            >
                <div className="flex items-center justify-between p-4 border-b border-gray-300">
                    <span className="text-xl font-bold text-gray-700">Menu</span>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 text-white hover:bg-gray-200"
                    >
                        <ExitIcon className="w-7 h-7 text-red-600" />
                    </button>
                </div>


                <nav className="mt-2 p-4 flex flex-col justify-between h-[675px]">
                    <ul className="space-y-4">
                        <li>
                            <Link to="/"
                                className="flex items-center gap-2 p-2 hover:bg-gray-200 text-xl"
                                aria-label="Go to home"
                                onClick={() => {
                                    setIsCheckoutMenuOpen(false);
                                    setIsMobileMenuOpen(false);
                                }}
                            >
                                <HomeIcon className="w-6 h-6" />
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/my-orders"
                                className="flex items-center gap-2 p-2 hover:bg-gray-200 text-xl"
                                onClick={() => {
                                    setIsCheckoutMenuOpen(false);
                                    setIsMobileMenuOpen(false);
                                }}
                                aria-label="View my orders"
                            >
                                <div className="relative">
                                    <OrdersListIcon className="w-7 h-7" />
                                    {savedOrders.length > 0 && (
                                        <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full text-xs px-1.5 py-0.5 transform translate-x-1/2 -translate-y-1/2">
                                            {savedOrders.length}
                                        </span>
                                    )}
                                </div>
                                Orders
                            </Link>
                        </li>
                        <li>
                            <button
                                className="flex items-center gap-2 p-2 hover:bg-gray-200 text-xl"
                                onClick={() => {
                                    setIsCheckoutMenuOpen(!isCheckoutMenuOpen);
                                    setIsProductDetailOpen(false);
                                    setIsMobileMenuOpen(false);
                                }}
                                aria-label="View cart"
                            >
                                <div className="relative">
                                    <CartShopIcon className="w-7 h-7" />
                                    {cartProducts.length > 0 && (
                                        <span className="absolute top-0 right-0 bg-blue-600 text-white rounded-full text-xs px-1.5 py-0.5 transform translate-x-1/2 -translate-y-1/2">
                                            {cartProducts.length}
                                        </span>
                                    )}
                                </div>
                                Shopping Cart
                            </button>
                        </li>
                    </ul>
                    {/* user profile */}
                    <div className="flex gap-2 border-t border-gray-400 pt-4">
                        <figure className='w-10 h-10'>
                            <img src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile" className='w-full h-full rounded-full' aria-label="User profile" />
                        </figure>
                        <div className="flex items-center gap-2 text-gray-700 font-medium text-lg">
                            <span>Efrexz</span>
                            <span>| Sign out</span>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export { NavMenu };

NavMenu.propTypes = {
    setIsMobileMenuOpen: PropTypes.func.isRequired
}