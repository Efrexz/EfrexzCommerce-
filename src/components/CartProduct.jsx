import Xicon from '@assets/xIcon.svg?react';
import PropTypes from 'prop-types';

function CartProduct(props) {

    const { id, price, imageUrl, title, removeItemCart } = props;


    return (
        <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-1">
                <figure className="w-20 h-20 flex  items-center gap-2">
                    <img className="w-full h-full object-fill rounded-lg" src={imageUrl} alt={title} />
                </figure>
                <p className="text-sm font-light">{title}</p>
            </div>
            <div className="flex items-center gap-1">
                <p className="flex font-medium text-lg"> ${price}</p>
                <Xicon className="h-6 w-6 cursor-pointer hover:text-red-500" onClick={() => removeItemCart(id)} />
            </div>
        </div>
    )
}

CartProduct.propTypes = {
    id: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    removeItemCart: PropTypes.func.isRequired
}


export { CartProduct };