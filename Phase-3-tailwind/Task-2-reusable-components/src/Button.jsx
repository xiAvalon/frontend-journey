function Button({children, disabled, variant='primary', ...rest}) {
    const styles = {
        primary: 'bg-[#f1356d] hover:bg-[#ed2561]',
        secondary: 'bg-gray-400 hover:bg-gray-500',
        danger: 'bg-rose-700 hover:bg-rose-800'
    }

    return (
        <button 
            disabled={disabled} 
            className={`${styles[variant]} text-white p-2 rounded-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`}
            {...rest}
        >
            {children}
        </button>
    )
}

export default Button
