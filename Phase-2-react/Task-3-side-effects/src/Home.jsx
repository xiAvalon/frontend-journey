import { useState, useEffect } from "react";
import BlogList from "./BlogList";

function Home() {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    function handleDelete(id){
        setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id))
    }
    
    function handleUpdate(id, newTitle){
        setBlogs((prev) => prev.map((blog) => blog.id === id ? {...blog, title: newTitle}: blog));
    }

    function handleAdd(blog){
        const newId = Math.max(...blogs.map(b => b.id)) + 1;
        setBlogs((blogs) => [...blogs, {...blog, id: newId}]);
    }

    useEffect(() => {
        fetch('http://localhost:3000/blogs')
            .then(res => {
                if(!res.ok){
                    throw new Error('Failed to fetch data');
                }
                return res.json()
            })
            .then(data => {
                setBlogs(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);
            });
    }, []);

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title='All Blogs:' onDelete={handleDelete} onUpdate={handleUpdate} />}
            {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs: " onDelete={handleDelete} onUpdate={handleUpdate} />}
            <button className="add-btn" disabled={!blogs} onClick={() => handleAdd({title: 'My Fourth Blog', body: 'This is a test.', author: 'luigi'})}>Add Blog</button>
        </div>
    )
}

export default Home