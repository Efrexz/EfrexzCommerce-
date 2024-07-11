import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PreviousPageArrow from '../assets/previousPageArrow.svg?react';
import { GlobalContext } from "../context/GlobalContext";

function MyOrder() {

    const { savedOrders } = useContext(GlobalContext);

    const { id } = useParams();
    const cartProducts = savedOrders?.find((order) => order.id == id);

    const navigate = useNavigate();

    return (
        <>
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <div className="mx-auto max-w-3xl">
                        <header className="flex items-center justify-between mb-8">
                            <PreviousPageArrow
                                className="mr-4 w-8 h-8 cursor-pointer"
                                onClick={() => navigate("/my-orders")}
                            />
                            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl mx-auto">Your Order</h1>
                        </header>

                        <div className="space-y-4 h-[70vh] overflow-y-auto custom-scrollbar pr-4">
                            <ul className="space-y-4">
                                {cartProducts?.cartProducts.map((product) => (
                                    <li className="flex items-center gap-4" key={product.id}>

                                        <img
                                            src={product.thumbnail}
                                            alt="product image"
                                            className="size-16 rounded object-cover"
                                        />

                                        <div>
                                            <h3 className="text-sm text-gray-900 font-bold ">{product.title}</h3>
                                            <dl className="mt-0.5 space-y-px text-[14px] text-gray-600">
                                                <div>
                                                    <dt className="inline font-medium">rating:</dt>
                                                    <dd className="inline"> {product.rating}</dd>
                                                </div>

                                                <div>
                                                    <dt className="inline font-medium">Date:</dt>
                                                    <dd className="inline"> 2022-05-01</dd>
                                                </div>
                                            </dl>
                                        </div>
                                        <div className="flex flex-1 items-center justify-end gap-2">
                                            <span className="font-medium text-gray-900 text-lg">
                                                ${product.price.toFixed(2)}
                                            </span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export { MyOrder }