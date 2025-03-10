import { useContext } from 'react';
import { GlobalContext } from '@context/GlobalContext';
import { Heart } from './Icons/Heart';
import PropTypes from 'prop-types';

function Card({ productInfo }) {

    const { setProductInfo, setIsProductDetailOpen, setIsCheckoutMenuOpen } = useContext(GlobalContext);

    const handleCardClick = () => {
        setProductInfo(productInfo);
        setIsCheckoutMenuOpen(false);
        setIsProductDetailOpen(true);
    };

    const handleHeartClick = (event) => {
        event.stopPropagation(); // Prevenir que el evento de clic se propague al contenedor padre y se abra el detalle del producto
    };

    return (
        <div
            className="w-58 h-[262px] bg-white cursor-pointer p-3 border max-w-52 rounded-lg shadow-md flex flex-col justify-between"
            onClick={handleCardClick}>
            <figure className="relative w-full h-44 bg-cover bg-center bg-gray-100">
                <span
                    onClick={handleHeartClick}
                    className="absolute top-0 right-0 bg-white/60 rounded-full px-1 py-0.5 m-2 text-sm"
                ><Heart productInfo={productInfo} /></span>
                <img
                    className="w-full h-full object-contain rounded-lg" src={productInfo.thumbnail} alt="product"
                />
            </figure>
            <div className="flex-grow mt-2">
                <h2 className="font-bold truncate">{productInfo.title}</h2>
            </div>
            <div className="flex justify-between items-center mt-auto">
                <span className="text-blue-600 font-bold text-xl">${productInfo.price}</span>
                <span className="font-medium">{productInfo.rating}⭐</span>
            </div>
        </div>
    );
}

Card.propTypes = {
    productInfo: PropTypes.object.isRequired
}

export { Card };


