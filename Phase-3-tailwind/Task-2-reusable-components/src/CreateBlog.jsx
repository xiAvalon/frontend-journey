import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";

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
                <Input 
                    type="text" 
                    required 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label className="text-left block">Blog Body:</label>
                <Input 
                    as="textarea"
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <label className="text-left block">Blog Author:</label>
                <Input 
                    as="select"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">Mario</option>
                    <option value="luigi">Luigi</option>
                </Input>
                {error && <p>{error}</p>}
                <Button disabled={isPending}>
                    {isPending ? 'Adding Blog...' : 'Add blog'}
                </Button>
            </form>
        </div>
    )
}

export default CreateBlog
