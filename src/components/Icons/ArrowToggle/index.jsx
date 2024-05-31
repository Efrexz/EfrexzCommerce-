import PropTypes from 'prop-types';

function ArrowToggle({ isOpen }) {
    return (
        <div className="flex justify-center items-center relative cursor-pointer text-sm user-select-none">
            <svg
                viewBox="0 0 512 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-transform duration-500 ${isOpen ? 'transform rotate-180' : ''}`}
                fill="#a5a5b0"
            >
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
            </svg>
        </div>
    );
}

ArrowToggle.propTypes = {
    isOpen: PropTypes.bool.isRequired
}

export { ArrowToggle };