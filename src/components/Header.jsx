import { Logo } from './Logo'
import { SearchValue } from './SearchValue'
import BellIcon from '../assets/bellIcon.svg?react';
import MessageIcon from '../assets/message.svg?react';
import ShopStore from '../assets/shopStore.svg?react';
import CartShop from '../assets/cartShop.svg?react';

function Header() {
    return (
        <header className="bg-gray-100 p-4">
            <nav className='flex justify-between items-center px-6'>
                <div className='flex items-center gap-6 w-[45%]'>
                    <Logo />
                    <SearchValue />
                    <ul className="flex items-center gap-4">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <span>|</span>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <span>|</span>
                        <li>
                            <a href="#">Gallery</a>
                        </li>
                        <span>|</span>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        <span>|</span>
                    </ul>
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
                        <li>
                            <a href="#"><CartShop className='w-7 h-7' /></a>
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