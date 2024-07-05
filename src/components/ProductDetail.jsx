import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import Xicon from '../assets/xIcon.svg?react';

function ProductDetail(props) {

    const { id, price, imageUrl, title, removeItemCart } = props;
    const { isProductDetailOpen, setIsProductDetailOpen, productInfo } = useContext(GlobalContext);

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
                <div>
                    <p className="mt-9 font-medium text-xl">${productInfo?.price}</p>
                    <form className="mt-4">
                        <button
                            className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
                        >
                            Add to Cart
                        </button>
                    </form>
                </div>
            </div>
        </aside>
    )
}


export { ProductDetail };