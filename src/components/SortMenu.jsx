import { useState } from 'react';
import ArrowDown from '../assets/arrowDown.svg?react';
import NextPageArrow from '../assets/nextPageArrow.svg?react';
import PreviousPageArrow from '../assets/previousPageArrow.svg?react';

const SortMenu = () => {
    const [selectedOption, setSelectedOption] = useState('');

    // const handleSortChange = (option) => {
    //     setSelectedOption(option);
    // };

    return (
        <div className="bg-gray-100 p-4  h-full flex w-full items-center justify-between">
            <div className='flex gap-6 items-center'>
                <h2 className="text-lg font-bold">Order By:</h2>
                <ul className="flex gap-6">
                    <li>
                        <button
                            className={`flex w-full text-left px-4 py-2 rounded ${selectedOption === 'price-asc' ? 'bg-blue-500 text-white' : 'bg-white'}`}
                        >
                            Popular
                            <ArrowDown />
                        </button>
                    </li>
                    <li>
                        <button
                            className={`flex w-full text-left px-4 py-2 rounded ${selectedOption === 'price-desc' ? 'bg-blue-500 text-white' : 'bg-white'}`}
                        >
                            Price: Low to High
                            <ArrowDown />
                        </button>
                    </li>
                    <li>
                        <button
                            className={`flex w-full text-left px-4 py-2 rounded ${selectedOption === 'popular' ? 'bg-blue-500 text-white' : 'bg-white'}`}
                        >
                            Price: High to Low
                            <ArrowDown />
                        </button>
                    </li>
                </ul>
            </div>

            <div className='flex justify-end gap-6'>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                    <PreviousPageArrow />
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                    <NextPageArrow />
                </button>
            </div>
        </div>
    );
};

export { SortMenu };
