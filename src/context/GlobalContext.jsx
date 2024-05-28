import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';

const GlobalContext = createContext();

function GlobalProvider({ children }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    // Llamado a la API
    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=99')
            .then((response) => response.json())
            .then((data) => {
                setData(data.products);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);



    // Elimina categorias repetidas y eliminando espacios en blanco en las categorias
    const categoriesNames = [...new Set(data.map((product) => product.category.replace("-", ' ')))];
    // Transforma las categorias en mayúsculas solo la primera letra
    const categoriesNamesUpperCase = categoriesNames.map((category) => category.charAt(0).toUpperCase() + category.slice(1));

    const categoryIcons = {
        "Beauty": "💄",
        "Fragrances": "🌸",
        "Furniture": "🛋️",
        "Groceries": "🛍️",
        "Home decoration": "🖼️",
        "Kitchen accessories": "🍳",
        "Laptops": "💻",
        "Mens shirts": "👔",
        "Mens shoes": "👞",
        "Mens watches": "⌚",
        "Mobile accessories": "📱"
    };

    // Agrega iconos a las categorias. Recorremos el array de categorias y si la categoria tiene un icono, agregamos el icono a la categoría si no solo devolvemos la categoría 
    const categoriesWithIcons = categoriesNamesUpperCase.map((category) => (categoryIcons[category] ? category + categoryIcons[category] : category));

    //Filtrado de productos por busqueda
    const [searchValue, setSearchValue] = useState("");

    const searchedProducts = data.filter(
        (productData) => {
            const productTitle = productData.title.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return productTitle.includes(searchText);
        }
    );

    return (
        <GlobalContext.Provider
            value={{
                data,
                loading,
                categoriesWithIcons,
                searchedProducts,
                searchValue,
                setSearchValue,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

GlobalProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { GlobalContext, GlobalProvider };