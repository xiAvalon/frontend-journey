import { useState } from "react";
import BlogList from "./BlogList";

function Home() {
    const [blogs, setBlogs] = useState([
        { id: 1, title: 'My First Blog', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', author: 'mario' },
        { id: 2, title: 'My Second Blog', body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.', author: 'luigi' },
        { id: 3, title: 'My Third Blog', body: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.', author: 'mario' },
    ]);


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

    return (
        <div className="home">
            <BlogList blogs={blogs} title='All Blogs:' onDelete={handleDelete} onUpdate={handleUpdate} />
            <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs: " onDelete={handleDelete} onUpdate={handleUpdate} />
            <button className="delete-btn" onClick={() => handleAdd({title: 'My Fourth Blog', body: 'This is a test.', author: 'luigi'})}>Add</button>
        </div>
    )
}

export default Home