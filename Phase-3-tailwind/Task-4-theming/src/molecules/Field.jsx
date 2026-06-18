import Input from "../atoms/Input"

function Field({label, id, ...rest}) {
    return (
        <div>
            <label htmlFor={id} className="text-left block">{label}</label>
            <Input id={id} {...rest} />
        </div>
    )
}

export default Field
