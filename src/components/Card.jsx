import Heart from '../assets/heart.svg?react';

function Card({ product }) {
    return (
        <div className="w-58 h-auto bg-white cursor-pointer p-3 border max-w-52 rounded-lg shadow-md">
            <figure className="relative w-full h-44 bg-cover bg-center bg-gray-100">
                <span className="absolute top-0 right-0 bg-white/60 rounded-full px-1 py-0.5 m-2 text-sm"><Heart /></span>
                <img
                    className="w-full h-full object-contain rounded-lg" src="/productItem.png" alt="product"
                />
            </figure>
            <h2 className="font-bold mt-2">Zapatos arrechisimos Vergatario</h2>
            <div className="flex justify-between items-center">
                <span className="text-blue-600 font-bold text-xl">$4.99</span>
                <span className="">4.8⭐</span>
            </div>
        </div>
    );
}

export { Card };