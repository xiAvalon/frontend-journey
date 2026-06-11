import { useState } from "react"
import { useNavigate } from "react-router-dom";

function CreateBlog() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null)
    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        const blog = {title, body, author};

        setIsPending(true);

        fetch('http://localhost:3000/blogs', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(blog)  
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
        <div className="max-w-110 my-0 mx-auto text-center p-5 hover:shadow-md">
            <h2 className="text-xl text-[#f1356d] mb-2.5">Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label className="text-left block">Blog Title:</label>
                <input 
                    className="w-full px-2.5 py-1.5 mx-0 my-2.5 border border-[#ddd] block"
                    type="text" 
                    required 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label className="text-left block">Blog Body:</label>
                <textarea 
                    className="w-full px-2.5 py-1.5 mx-0 my-2.5 border border-[#ddd] block"
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label className="text-left block">Blog Author:</label>
                <select
                    className="w-full px-2.5 py-1.5 mx-0 my-2.5 border border-[#ddd] block"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">Mario</option>
                    <option value="luigi">Luigi</option>
                </select>
                {error && <p>{error}</p>}
                {!isPending && 
                    <button 
                        className="bg-[#f1356d] text-white p-2 rounded-md cursor-pointer mr-2 mt-2.5 hover:bg-[#ed2561]"
                    >
                        Add Blog
                    </button>}
                {isPending && 
                    <button 
                        disabled
                        className="bg-[#f1356d] text-white p-2 rounded-md cursor-pointer mr-2 mt-2.5 hover:bg-[#ed2561]"
                    >
                        Adding Blog...
                    </button>}
            </form>
        </div>
    )
}

export default CreateBlog
