import { useContext, useState } from 'react';
import { ArrowToggle } from './Icons/ArrowToggle';
import { GlobalContext } from '@context/GlobalContext';
import MenuDepIcon from '@assets/icons/menuDep.svg?react'
import XIcon from '@assets/xIcon.svg?react'

function SortMenu() {
    const { orderBy, setOrderBy } = useContext(GlobalContext);

    //creamos un estado para saber cuando se abre o se cierra el menú de orden y enviarlo como prop al componente ArrowToggle
    const [isOpenOrderFunction, setIsOpenOrderFunction] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


    function handleSortChange(option) {
        //Si ya esta seleccionada la opcion actual, deseleccionar la opcion y asi cambiamos el color
        if (option === orderBy) {
            setOrderBy(null);
            setIsOpenOrderFunction(false);
        }
        //si no esta seleccionada se cambia el estado con el valor necesario para identificar el orden por el cual se va a mostrar
        else {
            setOrderBy(option);
            setIsOpenOrderFunction(true);
        }
        setIsMobileMenuOpen(false);
    }

    const sortOptions = [
        { id: 'popular', label: 'Popular' },
        { id: 'price-asc', label: 'Price: Low to High' },
        { id: 'price-desc', label: 'Price: High to Low' }
    ];


    return (
        <div className="bg-gray-100 p-4 w-full">
            {/* Desktop Version */}
            <div className="hidden lg:flex w-full items-center justify-between">
                <div className="flex gap-6 items-center">
                    <h2 className="text-lg font-bold">Order By:</h2>
                    <ul className="flex gap-6">
                        {sortOptions.map((option) => (
                            <li key={option.id}>
                                <button
                                    className={`flex items-center gap-1 w-full text-left px-4 py-2 rounded transition-colors
                                        ${orderBy === option.id ? 'bg-blue-500 text-white' : 'bg-white hover:bg-gray-50'}`}
                                    onClick={() => handleSortChange(option.id)}
                                >
                                    {option.label}
                                    <ArrowToggle isOpen={orderBy === option.id && isOpenOrderFunction} />
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Mobile Version */}
            <div className="lg:hidden">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-bold">Order By:</h2>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 hover:bg-gray-200 rounded transition-colors"
                    >
                        {isMobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuDepIcon className="w-7 h-7" />}
                    </button>
                </div>

                {/* Mobile Dropdown Menu */}
                {isMobileMenuOpen && (
                    <div className="mt-4 bg-white rounded-lg shadow-lg border border-gray-200">
                        <ul className="py-2">
                            {sortOptions.map((option) => (
                                <li key={option.id}>
                                    <button
                                        className={`flex items-center gap-2 w-full text-left px-4 py-3 transition-colors
                                            ${orderBy === option.id ? 'bg-blue-500 text-white' : 'hover:bg-gray-50'}`}
                                        onClick={() => handleSortChange(option.id)}
                                    >
                                        {option.label}
                                        <ArrowToggle isOpen={orderBy === option.id && isOpenOrderFunction} />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export { SortMenu };
