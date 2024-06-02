import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';

const GlobalContext = createContext();

function GlobalProvider({ children }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [orderBy, setOrderBy] = useState(null);
    const [searchValue, setSearchValue] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=99')
            .then((response) => response.json())
            .then((data) => {
                setData(data.products);
                setFilteredProducts(data.products); // Inicialmente mostramos todos los productos
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    const categoriesNames = [...new Set(data.map((product) => product.category.replace("-", ' ')))];
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

    const categoriesWithIcons = categoriesNamesUpperCase.map((category) => (categoryIcons[category] ? category + categoryIcons[category] : category));

    const filterAndSortProducts = (products, orderBy) => {
        let sortedProducts;

        switch (orderBy) {
            case 'popular':
                sortedProducts = [...products].sort((a, b) => b.rating - a.rating);
                break;
            case 'price-asc':
                sortedProducts = [...products].sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                sortedProducts = [...products].sort((a, b) => b.price - a.price);
                break;
            default:
                sortedProducts = products;
        }

        return sortedProducts;
    };

    useEffect(() => {
        let updatedProducts = filterAndSortProducts(data, orderBy);

        if (selectedCategory) {
            updatedProducts = updatedProducts.filter(product => product.category === selectedCategory);
        }

        if (searchValue) {
            updatedProducts = updatedProducts.filter(product => product.title.toLowerCase().includes(searchValue.toLowerCase()));
        }

        setFilteredProducts(updatedProducts);
    }, [data, selectedCategory, searchValue, orderBy]);

    const addToCart = (product) => {
        const isAlreadyInCart = cartProducts.some((cartProduct) => cartProduct.id === product.id);
        if (!isAlreadyInCart) {
            const newCart = [...cartProducts, product];
            setCartProducts(newCart);
        } else {
            removeFromCart(product);
        }
    };

    const removeFromCart = (product) => {
        const newCart = cartProducts.filter((cartProduct) => cartProduct.id !== product.id);
        setCartProducts(newCart);
    };

    return (
        <GlobalContext.Provider
            value={{
                loading,
                categoriesNamesUpperCase,
                searchedProducts: filteredProducts,
                selectedCategory,
                setSelectedCategory,
                filteredProducts,
                setFilteredProducts,
                searchValue,
                setSearchValue,
                orderBy,
                setOrderBy,
                cartProducts,
                addToCart,
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
