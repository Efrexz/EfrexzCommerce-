import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import Xicon from '../assets/xIcon.svg?react';

function ProductDetail() {
    const { isProductDetailOpen, setIsProductDetailOpen, productInfo, addToCart, cartProducts } = useContext(GlobalContext);

    const isAlreadyInCart = cartProducts.some((cartProduct) => cartProduct?.id === productInfo?.id);

    return (
        <aside className={`${isProductDetailOpen ? "flex" : "hidden"} flex-col  fixed right-0  top-[72px] border bg-white  border-black rounded-lg w-[360px] h-[calc(100vh-72px)] z-50`}>
            <button
                onClick={() => setIsProductDetailOpen(false)}
                className="absolute end-4 top-4 z-10 rounded-full bg-yellow-300 p-1 text-gray-900 transition hover:text-gray-900/75"
            >
                <span className="sr-only">Exit product detail</span>
                <Xicon />
            </button>

            <img
                src={productInfo?.images[0]}
                alt=""
                className="h-64 w-full rounded-lg"
            />

            <div className="relative flex flex-col justify-between border border-gray-100 bg-white p-6 flex-grow">
                <div>
                    <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium"> New </span>
                    <h3 className="mt-6 text-xl font-medium text-gray-900">{productInfo?.title}</h3>
                    <p className='mt-4 text-md text-gray-700'>{productInfo?.description}</p>
                </div>
                <div className='mb-8 md:mb-0'>
                    <p className="mt-9 font-medium text-xl mb-3">${productInfo?.price}</p>
                    <button
                        className={`block w-full rounded ${isAlreadyInCart ? "bg-yellow-200" : "bg-yellow-400"} p-4 text-sm font-medium transition hover:scale-105`}
                        onClick={() => addToCart(productInfo)}
                    >
                        {isAlreadyInCart ? "Remove from Cart" : "Add to Cart"}
                    </button>

                </div>
            </div>
        </aside>
    )
}


export { ProductDetail };