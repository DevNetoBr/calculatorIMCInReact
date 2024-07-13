function Label({ children, ...props}) {
    return (
        <label {...props} className='block text-neutral-600'>
            {children}
        </label>
    );
}

export default Label;
