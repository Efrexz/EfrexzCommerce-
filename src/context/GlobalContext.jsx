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

    ////////////Filtrado de productos por busqueda////////////

    const [searchValue, setSearchValue] = useState("");
    //De acuerdo si el usuario ha ordenado los productos, filtramos los productos por busqueda de acuerdo a la ordenn que ya ha seleccionado el usuario y si no selecciono ningun orden nos devuelve el array de productos original para poder filtrar por busqueda
    const searchedProducts = filterAndSortProducts(data, orderBy).filter(
        (productData) => {
            const productTitle = productData.title.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return productTitle.includes(searchText);
        }
    );


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

    return (
        <GlobalContext.Provider
            value={{
                loading,
                categoriesWithIcons,
                searchedProducts,
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