import { Logo } from './Logo'
import { SearchValue } from './SearchValue'
import BellIcon from '../assets/bellIcon.svg?react';
import MessageIcon from '../assets/message.svg?react';
import ShopStore from '../assets/shopStore.svg?react';
import CartShop from '../assets/cartShop.svg?react';
import { GlobalContext } from '../context/GlobalContext';
import { useContext } from 'react';

function Header() {
    const { cartProducts } = useContext(GlobalContext);

    return (
        <header className="bg-gray-100 p-4 border-b border-gray-400 absolute w-full">
            <nav className='flex justify-between items-center px-6'>
                <div className='flex items-center gap-6 w-[50%]'>
                    <Logo />
                    <SearchValue />
                </div>

                <div className="flex items-center gap-4">
                    <ul className='flex items-center gap-4'>
                        <li>
                            <a href="#"><BellIcon className='w-7 h-7' /></a>
                        </li>
                        <li>
                            <a href="#"><MessageIcon className='w-7 h-7' /></a>
                        </li>
                        <li>
                            <a href="#"><ShopStore className='w-7 h-7' /></a>
                        </li>
                        <li className='relative'>
                            <a href="#">
                                <CartShop className='w-7 h-7' />
                            </a>
                            <span className='absolute top-0 right-0 bg-blue-600 text-white rounded-full p-1 text-xs transform translate-x-1/2 -translate-y-1/2'>
                                {cartProducts.length}
                            </span>
                        </li>
                        <span className='font-bold mx-3'>|</span>
                        <figure>
                            <img src="/profileImage.jpg" alt="profile" className='w-10 h-10 rounded-full' />
                        </figure>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export { Header }