import { useContext } from 'react';
import ArrowDown from '../assets/arrowDown.svg?react';
import NextPageArrow from '../assets/nextPageArrow.svg?react';
import PreviousPageArrow from '../assets/previousPageArrow.svg?react';
import { GlobalContext } from '../context/GlobalContext';

const SortMenu = () => {
    const { orderBy, setOrderBy } = useContext(GlobalContext);


    const handleSortChange = (option) => {
        //Si ya esta seleccionada la opcion actual, deseleccionar la opcion y asi cambiamos el color
        if (option === orderBy) {
            setOrderBy(null);
        }
        //si no esta seleccionada se cambia el estado con el valor necesario para identificar el orden por el cual se va a mostrar
        else {
            setOrderBy(option);
        }
    };

    return (
        <div className="bg-gray-100 p-4  h-full flex w-full items-center justify-between">
            <div className='flex gap-6 items-center'>
                <h2 className="text-lg font-bold">Order By:</h2>
                <ul className="flex gap-6">
                    <li>
                        <button
                            className={`flex w-full text-left px-4 py-2 rounded ${orderBy === 'popular' ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            onClick={() => handleSortChange('popular')}
                        >
                            Popular
                            <ArrowDown />
                        </button>
                    </li>
                    <li>
                        <button
                            className={`flex w-full text-left px-4 py-2 rounded ${orderBy === 'price-asc' ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            onClick={() => handleSortChange('price-asc')}
                        >
                            Price: Low to High
                            <ArrowDown />
                        </button>
                    </li>
                    <li>
                        <button
                            className={`flex w-full text-left px-4 py-2 rounded ${orderBy === 'price-desc' ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            onClick={() => handleSortChange('price-desc')}
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
