import PropTypes from "prop-types";
import AlertIcon from '@assets/icons/alert.svg?react';
import SuccesIcon from "@assets/icons/success.svg?react";

function ActionModal({ onClose, typeOfAlert }) {

    const message = typeOfAlert === "error" ? "No products in cart" : "Checkout complete! Your order is now being processed.";


    return (
        <div className="fixed inset-0 flex justify-center items-start bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-md w-full h-auto max-w-xl mt-8 modal-appear mx-4">
                <div className="border-b border-gray-400 p-2 mb-4">
                    <p className={`text-white text-left ${typeOfAlert === "error" ? "bg-red-500" : "bg-green-500"} mb-4 p-4 rounded-md`}>
                        {
                            <span className="flex items-center gap-2">
                                {typeOfAlert === "error" ? <AlertIcon className="h-6 w-6" /> : <SuccesIcon className="h-6 w-6" />}
                                {message}
                            </span>
                        }
                    </p>
                </div>

                <div className="flex justify-end mt-6 gap-4">
                    <button
                        className="bg-white border border-gray-300 text-gray-700 py-2 px-4 text-sm rounded hover:bg-gray-100 flex items-center"
                        onClick={() => onClose()}
                    >
                        ACEPTAR
                    </button>
                </div>
            </div>
        </div>
    );
}

export { ActionModal };

ActionModal.propTypes = {
    onClose: PropTypes.func,
    typeOfAlert: PropTypes.string
}