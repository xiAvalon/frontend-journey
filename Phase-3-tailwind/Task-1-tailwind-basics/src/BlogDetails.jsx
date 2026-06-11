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
        <div>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article className="hover:shadow-md p-5">
                    <h2 className="text-xl text-[#f1356d] mb-2.5">{blog.title}</h2>
                    <p>Written by: <span className="underline">{blog.author}</span></p>
                    <div>{blog.body}</div>
                    {actionError && <p>{actionError}</p>}
                    <button 
                        className="bg-[#f1356d] text-white p-2 rounded-md cursor-pointer mr-2 mt-2.5 hover:bg-[#ed2561]" 
                        disabled={actionPending} 
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                    <button 
                        className="bg-[#f1356d] text-white p-2 rounded-md cursor-pointer mr-2 mt-2.5 hover:bg-[#ed2561]" 
                        disabled={actionPending} 
                        onClick={handleEditClick}
                    >
                        Edit
                    </button>

                    {isEditing && (
                        <form onSubmit={handleUpdate} className="max-w-100 mx-auto my-0 text-center">
                            <input className="w-full px-2.5 py-1.5 mx-0 my-2.5 border border-[#ddd] block" value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
                            <textarea className="w-full px-2.5 py-1.5 mx-0 my-2.5 border border-[#ddd] block" value={editBody} onChange={(e) => setEditBody(e.target.value)} />
                            <button 
                                type="submit" 
                                disabled={actionPending}
                                className="bg-[#f1356d] text-white p-2 rounded-md cursor-pointer mr-2 mt-2.5 hover:bg-[#ed2561]"
                            >
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