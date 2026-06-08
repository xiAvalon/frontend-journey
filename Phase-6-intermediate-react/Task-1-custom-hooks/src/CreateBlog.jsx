import { useState } from "react"
import { useNavigate } from "react-router-dom";
import useForm from "./useForm";

function CreateBlog() {
    const {values, handleChange} = useForm({title: '', body: '', author: 'mario'});
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null)
    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();

        setIsPending(true);

        fetch('http://localhost:3000/blogs', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(values)  
        }).then((res) => {
            if(!res.ok) throw new Error('Failed to post blog');
            return res.json();
        }).then(() => {
            navigate('/');
        }).catch((err) => {
            setError(err.message);
        }).finally(() => {
          setIsPending(false);  
        })
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                    name="title"
                    type="text" 
                    required 
                    value={values.title}
                    onChange={handleChange}
                />
                <label>Blog Body:</label>
                <textarea 
                    name="body"
                    required
                    value={values.body}
                    onChange={handleChange}
                ></textarea>
                <label>Blog Author:</label>
                <select
                    name="author"
                    value={values.author}
                    onChange={handleChange}
                >
                    <option value="mario">Mario</option>
                    <option value="luigi">Luigi</option>
                </select>
                {error && <p>{error}</p>}
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
            </form>
        </div>
    )
}

export default CreateBlog
