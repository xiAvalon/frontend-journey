import { useNavigate, useParams } from "react-router-dom"
import useFetch from "./useFetch";
import { useState } from "react";

function BlogDetails() {
    const {id} = useParams();
    const {data: blog, error, isPending} = useFetch('http://localhost:3000/blogs/' + id);
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState('');
    const [editBody, setEditBody] = useState('');
    const [actionError, setActionError] = useState(null);
    const [actionPending, setActionPending] = useState(false);


    function handleDelete(){
        setActionPending(true);
        fetch('http://localhost:3000/blogs/' + id, {
            method: 'DELETE'
        }).then((res) => {
            if(!res.ok) throw new Error('Fialed to delete blog');
            navigate('/');
        }).catch((err) => {
            setActionError(err.message);
        }).finally(() => {
            setActionPending(false);
        })
    }

    function handleUpdate(e){
        e.preventDefault();
        const updatedBlog = {...blog, title: editTitle, body: editBody};

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

    function handleEditClick(){
        setIsEditing(true);
        setEditTitle(blog.title);
        setEditBody(blog.body);
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
                    <button disabled={actionPending} onClick={handleEditClick}>Edit</button>

                    {isEditing && (
                        <form onSubmit={handleUpdate} className="edit-form">
                            <input value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
                            <textarea value={editBody} onChange={(e) => setEditBody(e.target.value)} />
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