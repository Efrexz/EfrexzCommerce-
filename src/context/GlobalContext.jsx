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
                setFilteredProducts(data.products); // Inicialmente mostramos todos los productos
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

    // const categoryIcons = {
    //     "Beauty": "💄",
    //     "Fragrances": "🌸",
    //     "Furniture": "🛋️",
    //     "Groceries": "🛍️",
    //     "Home decoration": "🖼️",
    //     "Kitchen accessories": "🍳",
    //     "Laptops": "💻",
    //     "Mens shirts": "👔",
    //     "Mens shoes": "👞",
    //     "Mens watches": "⌚",
    //     "Mobile accessories": "📱"
    // };

    // // Agrega iconos a las categorias. Recorremos el array de categorias y si la categoria tiene un icono, agregamos el icono a la categoría si no solo devolvemos la categoría
    // const categoriesWithIcons = categoriesNamesUpperCase.map((category) => (categoryIcons[category] ? category + categoryIcons[category] : category));


    /////////ordernar los productos por precio y rating//////////
    //creamos un estado para poder enviar al SortMenu y este sea modificado de acuerdo al orden que el usuario elija
    const [orderBy, setOrderBy] = useState(null);
    // filtrar y ordenar los productos
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

    ////////////Filtrado de productos por busqueda y categoria////////////

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    //cuando cambian los datos, la categoría seleccionada, el valor de busqueda o el orden
    useEffect(() => {
        let updatedProducts = filterAndSortProducts(data, orderBy);

        // filtrar los productos por categoría si hay una categoría seleccionada
        if (selectedCategory) {
            updatedProducts = updatedProducts.filter(product => product.category === selectedCategory);
        }
        // filtrar los productos por el valor de busqueda si hay un valor de busqueda
        if (searchValue) {
            updatedProducts = updatedProducts.filter(product => product.title.toLowerCase().includes(searchValue.toLowerCase()));
        }
        setFilteredProducts(updatedProducts);
    }, [data, selectedCategory, searchValue, orderBy]);


    /////////////Agregar productos al carrito de compras////////////

    const [cartProducts, setCartProducts] = useState([]);
    const addToCart = (product) => {
        //rerificar si ya existe el producto en el carrito
        const isAlreadyInCart = cartProducts.some((cartProduct) => cartProduct.id === product.id);
        if (!isAlreadyInCart) {
            const newCart = [...cartProducts, product];
            setCartProducts(newCart);
        } else {
            //si ya existe el producto en el carrito, eliminarlo
            removeFromCart(product);
        }
    }

    const removeFromCart = (product) => {
        const newCart = cartProducts.filter((cartProduct) => cartProduct.id !== product.id);
        setCartProducts(newCart);
    };

    ////////////// Menu Carrito de compras ////////////////
    const [isCheckoutMenuOpen, setIsCheckoutMenuOpen] = useState(false);

    ////////////// Tarjeta del detalle del producto ////////////////
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const [productInfo, setProductInfo] = useState(null);

    ////////////// Ordenes Guardadas ////////////////
    const [savedOrders, setSavedOrders] = useState([]);

    ////////////// Sidebar en mobile ////////////////
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <GlobalContext.Provider
            value={{
                loading,
                categoriesNamesUpperCase,
                filteredProducts,
                selectedCategory,
                setSelectedCategory,
                searchValue,
                setSearchValue,
                orderBy,
                setOrderBy,
                cartProducts,
                setCartProducts,
                addToCart,
                isCheckoutMenuOpen,
                setIsCheckoutMenuOpen,
                isProductDetailOpen,
                setIsProductDetailOpen,
                productInfo,
                setProductInfo,
                savedOrders,
                setSavedOrders,
                isSidebarOpen,
                setIsSidebarOpen,
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