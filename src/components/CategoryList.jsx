import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function CategoryList() {

    const { categoriesNamesUpperCase, selectedCategory, setSelectedCategory, searchedProducts, setFilteredProducts, filteredProducts } = useContext(GlobalContext);

    function handleChange(category) {
        const categoryName = category.toLowerCase().replace(" ", '-');
        if (selectedCategory === categoryName) {
            // Si la categoría seleccionada es la misma, deseleccionamos y mostramos todos los productos
            setSelectedCategory("");
            setFilteredProducts(searchedProducts);
        } else {
            // Si no, filtramos los productos por la nueva categoría seleccionada
            const filteredProducts = searchedProducts.filter((product) => product.category === category.toLowerCase().replace(" ", '-'));
            setSelectedCategory(category.toLowerCase().replace(" ", '-'));
            setFilteredProducts(filteredProducts);
        }
        console.log(selectedCategory);
        console.log(filteredProducts);
    }

    return (
        <fieldset>
            <legend className="text-lg font-bold text-gray-900">Categorías</legend>

            <div className="mt-4 space-y-3.5">
                {categoriesNamesUpperCase.map((category) => (
                    <label
                        key={category}
                        className="flex cursor-pointer items-start gap-4"
                        onClick={() => handleChange(category)}
                    //al hacer click si ya tiene el valor, lo vuelve null y si no esta seleccionado le cambia el valor para poder filtrar los productos por categoria
                    // onClick={selectedCategory === category ? () => setSelectedCategory("prueba") : () => setSelectedCategory(category)}
                    >
                        <div className="flex items-center">
                            &#8203;
                            <div className="dark:bg-black/10">
                                <label className="text-white">
                                    <input className="dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-4 h-4" type="checkbox" />
                                </label>
                            </div>
                        </div>

                        <div>
                            <strong
                                className="font-medium text-gray-900"
                            > {category} </strong>
                        </div>
                    </label>
                ))}
            </div>
        </fieldset>
    );
}

export { CategoryList };