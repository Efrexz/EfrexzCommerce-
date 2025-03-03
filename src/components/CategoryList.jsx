import { useContext } from "react";
import { GlobalContext } from "@context/GlobalContext";
import XIcon from '@assets/xIcon.svg?react'

function CategoryList() {

    const { categoriesNamesUpperCase, selectedCategory, setSelectedCategory, isSidebarOpen, setIsSidebarOpen } = useContext(GlobalContext);

    function handleChange(category) {
        const categoryName = category.toLowerCase().replace(" ", '-');
        if (selectedCategory === categoryName) {
            // Si la categoría seleccionada es la misma, deseleccionamos y mostramos todos los productos
            setSelectedCategory(null);
        } else {
            setSelectedCategory(categoryName);
        }
    }

    return (
        <aside>
            {/* Botón para mostrar/ocultar sidebar en pantallas pequeñas */}
            <button
                className="lg:hidden absolute top-20 left-4 z-40 bg-gray-100 p-2 rounded-lg shadow-md"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                <XIcon className="w-6 h-6" />
            </button>
            <fieldset className="mt-16 lg:mt-0 w-[210px]">

                <legend className="text-lg font-bold text-gray-900">Categories</legend>

                <div className="mt-4 space-y-3.5">
                    {categoriesNamesUpperCase.map((category) => {

                        return (
                            <label
                                key={category}
                                className="flex cursor-pointer items-start gap-4"
                            >
                                <div className="flex items-center">
                                    &#8203;
                                    <div className="dark:bg-black/10">
                                        <label className="text-white">
                                            <input
                                                className="dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-4 h-4"
                                                type="checkbox"
                                                /*hacemos esto en checked para poder solo seleccionar una categoria a la vez */
                                                checked={selectedCategory === category.toLowerCase().replace(" ", '-')}
                                                onChange={() => handleChange(category)} />
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <strong
                                        className="font-medium text-gray-900"
                                    > {category} </strong>
                                </div>
                            </label>
                        )
                    })}
                </div>
            </fieldset>
        </aside>

    );
}

export { CategoryList };
