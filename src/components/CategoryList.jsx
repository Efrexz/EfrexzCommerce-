import { useContext } from "react";
import { GlobalContext } from "@context/GlobalContext";
import XIcon from '@assets/xIcon.svg?react'

function CategoryList() {

    const { categoriesNamesUpperCase, selectedCategory, setSelectedCategory, isSidebarOpen, setIsSidebarOpen, loading } = useContext(GlobalContext);

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
        <aside className="h-full w-full">
            {loading ? (
                // Loading Skeleton
                <div>
                    <div className="md:hidden absolute top-4 left-4 z-40 bg-gray-200 p-3 rounded-lg animate-pulse w-10 h-10"></div>

                    <fieldset className="mt-16 md:mt-0 w-full">
                        {/* Skeleton del título */}
                        <div className="h-6 w-40 bg-gray-300 animate-pulse rounded-md"></div>

                        <div className="mt-4 space-y-3.5">
                            {[...Array(8)].map((_, index) => (
                                <div key={index} className="flex items-center gap-4">

                                    <div className="w-6 h-6 bg-gray-300 animate-pulse rounded-md"></div>

                                    <div className="h-4 w-32 md:w-24 bg-gray-300 animate-pulse rounded-md"></div>
                                </div>
                            ))}
                        </div>
                    </fieldset>
                </div>
            ) : (
                <div>
                    {/* Botón para mostrar/ocultar sidebar en pantallas pequeñas */}
                    <button
                        className="md:hidden absolute top-4 left-4 z-40 bg-gray-100 p-2 rounded-lg shadow-md"
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    >
                        <XIcon className="w-6 h-6" />
                    </button>

                    <fieldset className="mt-16 md:mt-0 w-full">
                        <legend className="text-2xl md:text-lg font-bold text-gray-900">Categories</legend>

                        <div className="mt-4 space-y-3.5">
                            {categoriesNamesUpperCase.map((category) => (
                                <label key={category} className="flex cursor-pointer items-start gap-4">
                                    <div className="flex items-center">
                                        &#8203;
                                        <div className="dark:bg-black/10">
                                            <input
                                                className="dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-6 md:w-4 h-6 sm:h-4"
                                                type="checkbox"
                                                checked={selectedCategory === category.toLowerCase().replace(" ", '-')}
                                                onChange={() => handleChange(category)}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <strong className="font-medium text-gray-900 text-lg md:text-base">
                                            {category}
                                        </strong>
                                    </div>
                                </label>
                            ))}
                        </div>
                    </fieldset>
                </div>
            )}
        </aside>
    );
}

export { CategoryList };
