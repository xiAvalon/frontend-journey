import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useState } from "react";
import Button from "../atoms/Button";
import Field from "../molecules/Field";

function BlogDetails() {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:3000/blogs/" + id);
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const [actionError, setActionError] = useState(null);
  const [actionPending, setActionPending] = useState(false);

  function handleDelete() {
    setActionPending(true);
    fetch("http://localhost:3000/blogs/" + id, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to delete blog");
        navigate("/");
      })
      .catch((err) => {
        setActionError(err.message);
      })
      .finally(() => {
        setActionPending(false);
      });
  }

  function handleUpdate(e) {
    e.preventDefault();
    const updatedBlog = { ...blog, title: editTitle, body: editBody };

    setActionPending(true);
    fetch("http://localhost:3000/blogs/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedBlog),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to update blog");
        return res.json();
      })
      .then(() => {
        setIsEditing(false);
        navigate("/");
      })
      .catch((err) => {
        setActionError(err.message);
      })
      .finally(() => {
        setActionPending(false);
      });
  }

  function handleEditClick() {
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
          <p>
            Written by: <span className="underline">{blog.author}</span>
          </p>
          <div>{blog.body}</div>
          {actionError && <p>{actionError}</p>}
          <div className="flex gap-2 mt-2.5">
            <Button
              onClick={handleDelete}
              disabled={actionPending}
              variant="danger"
            >
              Delete
            </Button>
            <Button disabled={actionPending} onClick={handleEditClick}>
              Edit
            </Button>
          </div>
          {isEditing && (
            <form
              onSubmit={handleUpdate}
              className="max-w-100 mx-auto my-6 text-center"
            >
              <Field 
                id='title'
                label='Blog Title:'
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
              <Field
                id='body'
                label='Blog Body:'
                as="textarea"
                value={editBody}
                onChange={(e) => setEditBody(e.target.value)}
              />
              <div className="flex gap-2">
                <Button type="submit" disabled={actionPending}>
                  {actionPending ? "Saving..." : "Save"}
                </Button>
                <Button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  disabled={actionPending}
                  variant="secondary"
                >
                  Cancel
                </Button>
              </div>
            </form>
          )}
        </article>
      )}
    </div>
  );
}

export default BlogDetails;
