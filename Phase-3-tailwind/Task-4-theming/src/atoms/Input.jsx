function Input({as: Tag = 'input', children, ...rest}) {
    return (
        <Tag 
            className="w-full px-2.5 py-1.5 my-2.5 border border-input rounded-md focus:outline-none focus:border-brand"
            {...rest}
        >
            {children}
        </Tag>
    )
}

export default Input
