import { useNavigate, useParams } from "react-router-dom"
import useFetch from "./useFetch";
import useForm from "./useForm";
import { useEffect, useState } from "react";

function BlogDetails() {
    const {id} = useParams();
    const {data: blog, error, isPending} = useFetch('http://localhost:3000/blogs/' + id);
    const { values, handleChange, setValues } = useForm({ title: '', body: '' });
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [actionError, setActionError] = useState(null);
    const [actionPending, setActionPending] = useState(false);


    useEffect(() => {
        if(blog){
            setValues({title: blog.title, body: blog.body});
        }
    }, [blog, setValues])
    
    function handleDelete(){
        setActionPending(true);
        fetch('http://localhost:3000/blogs/' + id, {
            method: 'DELETE'
        }).then((res) => {
            if(!res.ok) throw new Error('Failed to delete blog');
            navigate('/');
        }).catch((err) => {
            setActionError(err.message);
        }).finally(() => {
            setActionPending(false);
        })
    }

    function handleUpdate(e){
        e.preventDefault();
        const updatedBlog = {...blog, ...values};

        setActionPending(true);
        fetch('http://localhost:3000/blogs/' + id, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updatedBlog)
        }).then((res) => {
            if (!res.ok) throw new Error('Failed to update blog');
            return res.json();
        }).then(() => {
            setIsEditing(false);
            navigate('/');
        }).catch((err) => {
            setActionError(err.message);
        }).finally(() => {
            setActionPending(false);
        })
    }

    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author}</p>
                    <div>{blog.body}</div>
                    {actionError && <p>{actionError}</p>}
                    <button disabled={actionPending} onClick={handleDelete}>Delete</button>
                    <button disabled={actionPending} onClick={() => setIsEditing(true)}>Edit</button>

                    {isEditing && (
                        <form onSubmit={handleUpdate} className="edit-form">
                            <input name="title" value={values.title} onChange={handleChange} />
                            <textarea name="body" value={values.body} onChange={handleChange} />
                            <button type="submit" disabled={actionPending}>
                                {actionPending ? 'Saving...' : 'Save'}
                            </button>
                        </form>
                    )}
                </article>
            )}
        </div>
    )
}

export default BlogDetails