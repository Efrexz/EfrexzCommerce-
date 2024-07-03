import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Logo } from './Logo'
import { SearchValue } from './SearchValue'
import HomeIcon from '../assets/homeIcon.svg?react';
import OrdersList from '../assets/ordersList.svg?react';
import CartShop from '../assets/cartShop.svg?react';
import { GlobalContext } from '../context/GlobalContext';

function Header() {
    const { cartProducts, isCheckoutMenuOpen, setIsCheckoutMenuOpen } = useContext(GlobalContext);

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
                        <li>
                            <Link to="/my-orders" onClick={() => { setIsCheckoutMenuOpen(false); }} aria-label="View my orders">
                                <OrdersList className='w-7 h-7' />
                            </Link>
                        </li>
                        <li className='relative'>
                            <span onClick={() => { setIsCheckoutMenuOpen(!isCheckoutMenuOpen); }} aria-label="View cart">
                                <CartShop className='w-7 h-7' />
                            </span>
                            <span className='absolute top-0 right-0 bg-blue-600 text-white rounded-full p-1 text-xs transform translate-x-1/2 -translate-y-1/2'>
                                {cartProducts.length}
                            </span>
                        </li>
                        <span className='font-bold mx-3'>|</span>
                        <figure>
                            <img src="/profileImage.jpg" alt="profile" className='w-10 h-10 rounded-full' aria-label="User profile" />
                        </figure>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export { Header }