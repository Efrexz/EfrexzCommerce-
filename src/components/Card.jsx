import Heart from '../assets/heart.svg?react';
import PropTypes from 'prop-types';

function Card({ productInfo }) {
    return (
        <div className="w-58 h-auto bg-white cursor-pointer p-3 border max-w-52 rounded-lg shadow-md">
            <figure className="relative w-full h-44 bg-cover bg-center bg-gray-100">
                <span className="absolute top-0 right-0 bg-white/60 rounded-full px-1 py-0.5 m-2 text-sm"><Heart /></span>
                <img
                    className="w-full h-full object-contain rounded-lg" src="/productItem.png" alt="product"
                />
            </figure>
            <h2 className="font-bold mt-2">{productInfo.name}</h2>
            <div className="flex justify-between items-center">
                <span className="text-blue-600 font-bold text-xl">${productInfo.price}</span>
                <span className="">{productInfo.rating}⭐</span>
            </div>
        </div>
    );
}

Card.propTypes = {
    productInfo: PropTypes.object.isRequired
}

export { Card };