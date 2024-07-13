function Button ({children, ...props}) {
    return (
        <button {...props} className='mt-6 bg-rose-400 text-white font-bold rounded w-full p-3'>
            {children}
        </button>
    )
};
export default Button;