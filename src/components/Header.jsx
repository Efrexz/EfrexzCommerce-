import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Logo } from './Logo'
import { SearchValue } from './SearchValue'
import HomeIcon from '@assets/homeIcon.svg?react';
import OrdersList from '@assets/ordersList.svg?react';
import CartShop from '@assets/cartShop.svg?react';
import { GlobalContext } from '@context/GlobalContext';

function Header() {
    const { cartProducts, isCheckoutMenuOpen, setIsCheckoutMenuOpen, setIsProductDetailOpen, savedOrders } = useContext(GlobalContext);

    return (
        <header className="bg-gray-100 p-4 border-b border-gray-400 w-full z-50">
            <nav className='flex justify-between items-center px-6'>
                <div className='flex items-center gap-6 w-[50%]'>
                    <Link to="/" aria-label="Go to home">
                        <Logo className='w-7 h-7' />
                    </Link>
                    <SearchValue />
                </div>

                <div className="flex items-center gap-4">
                    <ul className='flex items-center gap-4'>
                        <li>
                            <Link to="/" onClick={() => { setIsCheckoutMenuOpen(false); }} aria-label="Go to home">
                                <HomeIcon className='w-7 h-7' />
                            </Link>
                        </li>
                        <li className='relative'>
                            <Link to="/my-orders" onClick={() => { setIsCheckoutMenuOpen(false); }} aria-label="View my orders">
                                <OrdersList className='w-7 h-7' />
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
                                <CartShop className='w-7 h-7' />
                            </span>
                            <span className={`${cartProducts.length === 0 ? "hidden" : ""} absolute top-0 right-0 bg-blue-600 text-white rounded-full p-1 text-xs transform translate-x-1/2 -translate-y-1/2`}>
                                {cartProducts.length}
                            </span>
                        </li>
                        <span className='font-bold mx-3 hidden md:block'>|</span>
                        <figure className='hidden md:block'>
                            <img src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile" className='w-10 h-10 rounded-full' aria-label="User profile" />
                        </figure>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export { Header }