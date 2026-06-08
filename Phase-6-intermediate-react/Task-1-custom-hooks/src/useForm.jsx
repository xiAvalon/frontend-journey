import { useState } from "react"

function useForm(initialValue) {
    const [values, setValues] = useState(initialValue);

    function handleChange(e){
        setValues((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    function reset(){
        setValues(initialValue);
    }

    return {values, setValues, handleChange, reset};
}

export default useForm
