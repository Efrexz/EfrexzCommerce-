import { useContext, useEffect, useState } from "react";
import { CartProduct } from "./CartProduct";
import { GlobalContext } from "@context/GlobalContext";
import { ActionModal } from "./ActionModal";
import ExitCartArrow from '@assets/exitCartArrow.svg?react';
import "../index.css";

function CheckoutSideMenu() {

    const {
        isCheckoutMenuOpen,
        setIsCheckoutMenuOpen,
        cartProducts,
        setCartProducts,
        savedOrders,
        setSavedOrders
    } = useContext(GlobalContext);


    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let newPrice = 0;
        cartProducts.forEach((product) => {
            newPrice += product.price;
        });
        setTotalPrice(newPrice.toFixed(2));
    }, [cartProducts]);


    function removeItemCart(id) {
        const productIndex = cartProducts.findIndex((product) => product.id === id);
        const newCartList = [...cartProducts];//guardamos todos los productos en esta variable
        newCartList.splice(productIndex, 1);//modificamos esta lista segun el id del producto al eliminarlo
        setCartProducts(newCartList);//modificamos el estado agregando el nuevo array modificado de items en el carrito
    }

    const [error, setError] = useState(false);
    const [successModal, setSuccessModal] = useState(false);

    function checkoutProducts() {
        if (cartProducts.length < 1) {
            setError(true);
            return;
        } else {
            setSavedOrders([...savedOrders, { cartProducts, id: Date.now() }]);
            setCartProducts([]);
            setIsCheckoutMenuOpen(false);
            setSuccessModal(true);
        }
    }


    return (
        <>
            <aside className={`${isCheckoutMenuOpen ? "flex" : "hidden"} flex-col  fixed right-0  top-[72px] border bg-white p-4 border-black rounded-lg w-[360px] h-[calc(100vh-72px)] z-50`}>
                <div className="flex justify-between">
                    <h2 className="font-medium text-xl">My Order</h2>
                    <ExitCartArrow
                        className="h-9 w-9 cursor-pointer"
                        onClick={() => setIsCheckoutMenuOpen(false)} />
                </div>
                <div className="px-2 overflow-y-auto flex-1 mt-6 mb-4 custom-scrollbar">
                    {
                        cartProducts.map((product) => (//por cada producto en nuestro cartproducts generamos una nueva card
                            <CartProduct
                                key={product.id}
                                id={product.id}
                                price={product.price}
                                title={product.title}
                                imageUrl={product.thumbnail}
                                removeItemCart={removeItemCart}
                            />
                        ))
                    }
                </div>
                <p className="flex justify-between mb-5 border-t-4 pt-2 items-center">
                    <span className="text-2xl font-medium">Total:</span>
                    <span className="font-medium text-2xl">${totalPrice}</span>
                </p>
                <button
                    onClick={() => checkoutProducts()}
                    className={`block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105 mb-8 md:mb-0`}
                >
                    CheckOut
                </button>
            </aside>
            {successModal && (
                <ActionModal
                    onClose={() => setSuccessModal(false)}
                    typeOfAlert="success"
                />
            )}
            {error && (
                <ActionModal
                    onClose={() => setError(false)}
                    typeOfAlert="error"
                />
            )}
        </>
    )
}

export { CheckoutSideMenu };
