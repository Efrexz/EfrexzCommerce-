import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Logo } from './Logo'
import { SearchValue } from './SearchValue'
import { GlobalContext } from '@context/GlobalContext';
import { NavMenu } from './NavMenu';
import MenuIcon from '@assets/burguerMenu.svg?react'
import HomeIcon from '@assets/homeIcon.svg?react';
import OrdersListIcon from '@assets/ordersList.svg?react';
import CartShopIcon from '@assets/cartShop.svg?react';

function Header() {
    const { cartProducts, isCheckoutMenuOpen, setIsCheckoutMenuOpen, setIsProductDetailOpen, savedOrders } = useContext(GlobalContext);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    function toggleMobileMenu() {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }


    return (
        <header className="bg-gray-100 p-4 border-b border-gray-400 fixed top-0 left-0 right-2 z-50 w-full">
            <nav className='flex justify-between items-center px-4 w-full'>
                <div className='flex items-center gap-4 w-full'>
                    <Link to="/" aria-label="Go to home">
                        <Logo className='w-7 h-7' />
                    </Link>
                    <SearchValue />
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-4">
                    <ul className='flex items-center gap-4'>
                        <li>
                            <Link to="/" onClick={() => { setIsCheckoutMenuOpen(false); }} aria-label="Go to home">
                                <HomeIcon className='w-7 h-7' />
                            </Link>
                        </li>
                        <li className='relative'>
                            <Link to="/my-orders" onClick={() => { setIsCheckoutMenuOpen(false); }} aria-label="View my orders">
                                <OrdersListIcon className='w-7 h-7' />
                            </Link>
                            <span className={`${savedOrders.length === 0 ? "hidden" : ""} absolute top-0 right-0 bg-red-600 text-white rounded-full p-1 text-xs transform translate-x-1/2 -translate-y-1/2`}>
                                {savedOrders.length}
                            </span>
                        </li>
                        <li className='relative'>
                            <span onClick={() => {
                                setIsCheckoutMenuOpen(!isCheckoutMenuOpen);
                                setIsProductDetailOpen(false);
                            }}
                                aria-label="View cart" className='cursor-pointer'>
                                <CartShopIcon className='w-7 h-7' />
                            </span>
                            <span className={`${cartProducts.length === 0 ? "hidden" : ""} absolute top-0 right-0 bg-blue-600 text-white rounded-full p-1 text-xs translate-x-1/2 -translate-y-1/2`}>
                                {cartProducts.length}
                            </span>
                        </li>
                        <span className='font-bold mx-3'>|</span>
                        <figure className='w-10 h-10'>
                            <img src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile" className='w-full h-full rounded-full' aria-label="User profile" />
                        </figure>
                    </ul>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="relative md:hidden p-2"
                    onClick={toggleMobileMenu}
                    aria-label="openMenu"
                >
                    <MenuIcon className="w-6 h-6" />
                    {
                        (cartProducts.length > 0 || savedOrders.length > 0) && (
                            <span className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center transform translate-x-1/2 -translate-y-1/2">
                                !
                            </span>)
                    }
                </button>

                {/* Mobile Menu del navbar como sidebar */}
                {isMobileMenuOpen && (
                    <NavMenu setIsMobileMenuOpen={setIsMobileMenuOpen} />
                )}
            </nav>
        </header>
    );
}

export { Header }