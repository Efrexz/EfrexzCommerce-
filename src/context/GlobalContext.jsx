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


    const categoryIcons = {
        "Beauty": " 💄",
        "Fragrances": " 🌸",
        "Furniture": " 🛋️",
        "Groceries": " 🛍️",
        "Home decoration": " 🖼️",
        "Kitchen accessories": " 🍳",
        "Laptops": " 💻",
        "Mens shirts": " 👔",
        "Mens shoes": " 👞",
        "Mens watches": " ⌚",
        "Mobile accessories": " 📱"
    };
    // Elimina categorias repetidas y eliminando espacios en blanco en las categorias
    const categoriesNames = [...new Set(data.map((product) => product.category.replace("-", ' ')))];
    // Transforma las categorias en mayúsculas solo la primera letra
    const categoriesNamesUpperCase = categoriesNames.map((category) => category.charAt(0).toUpperCase() + category.slice(1));
    console.log(categoriesNamesUpperCase);

    // Agrega iconos a las categorias. Recorremos el array de categorias y si la categoria tiene un icono, agregamos el icono a la categoría si no solo devolvemos la categoría 
    const categoriesWithIcons = categoriesNamesUpperCase.map((category) => (categoryIcons[category] ? category + categoryIcons[category] : category));


    return (
        <GlobalContext.Provider
            value={{
                data,
                loading,
                categoriesWithIcons,
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