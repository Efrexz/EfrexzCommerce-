import { CheckoutSideMenu } from "../components/CheckOutSideMenu";
import OrderIcon from '../assets/orderIcon.svg?react';
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";
import "../index.css";

function MyOrders() {
    const { savedOrders } = useContext(GlobalContext);

    // Calcular el total de todos los precios de las órdenes
    const totalPrice = savedOrders.reduce((total, order) => {
        const orderTotal = order.cartProducts.reduce((acc, curr) => acc + curr.price, 0);
        return total + orderTotal;
    }, 0);

    return (
        <>
            <CheckoutSideMenu />
            <section >
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <div className="mx-auto max-w-3xl">
                        <header className="text-center">
                            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Your Orders</h1>
                        </header>

                        <div className="mt-8">
                            <ul className="space-y-4 h-[45vh] overflow-y-scroll custom-scrollbar">
                                {savedOrders.map((order) => {
                                    const priceByOrder = order.cartProducts.reduce((acc, curr) => acc + curr.price, 0);

                                    const longNumber = order.id;
                                    // Convertimos el numero a string y extraemos los últimos seis dígitos
                                    const lastSixDigits = longNumber.toString().slice(-6);

                                    return (
                                        <li className="flex items-center gap-4" key={order.id}>
                                            <OrderIcon className='w-14 h-14' />

                                            <div>
                                                <h3 className="text-sm text-gray-900 font-bold">ORDER #{lastSixDigits}</h3>

                                                <dl className="mt-0.5 space-y-px text-[14px] text-gray-600">
                                                    <div>
                                                        <dt className="inline font-medium">Items:</dt>
                                                        <dd className="inline"> {order.cartProducts.length}</dd>
                                                    </div>

                                                    <div>
                                                        <dt className="inline font-medium">Date:</dt>
                                                        <dd className="inline"> 2022-05-01</dd>
                                                    </div>
                                                </dl>
                                            </div>

                                            <div className="flex flex-1 items-center justify-end gap-2">
                                                <span className="font-medium text-gray-900 text-lg">
                                                    ${priceByOrder.toFixed(2)}
                                                </span>
                                                <button className="text-gray-600 transition hover:text-red-600">
                                                    <span className="sr-only">Remove item</span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        className="h-5 w-5"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>

                            <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                                <div className="w-screen max-w-lg space-y-4">
                                    <dl className="space-y-0.5 text-sm text-gray-700">
                                        <div className="flex justify-between">
                                            <dt>Subtotal</dt>
                                            <dd>${totalPrice.toFixed(2)}</dd>
                                        </div>

                                        <div className="flex justify-between">
                                            <dt>IVA</dt>
                                            <dd>${(totalPrice * 0.1).toFixed(2)}</dd>
                                        </div>

                                        <div className="flex justify-between !text-base font-medium">
                                            <dt>Total</dt>
                                            <dd>${(totalPrice * 1.1).toFixed(2)}</dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export { MyOrders };
