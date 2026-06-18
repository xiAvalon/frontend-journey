import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../atoms/Button";
import Field from "../molecules/Field";

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    fetch("http://localhost:3000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to post blog");
        return res.json();
      })
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsPending(false);
      });
  }

  return (
    <div className="max-w-110 my-0 mx-auto text-center p-5 hover:shadow-md dark:hover:shadow-none dark:hover:bg-white/5">
      <h2 className="text-xl text-brand mb-2.5">Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <Field 
          id='title'
          label='Blog Title:' 
          type='text' 
          required 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        <Field 
          id='body'
          label='Blog Body:'
          as="textarea"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <Field
          id='author'
          label='Blog Author:'
          as="select"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">Mario</option>
          <option value="luigi">Luigi</option>
        </Field>
        
        {error && <p>{error}</p>}
        <Button disabled={isPending}>
          {isPending ? "Adding Blog..." : "Add blog"}
        </Button>
      </form>
    </div>
  );
}

export default CreateBlog;
