function BlogPreview({blog, onDelete}) {
    return (
        <div className="blog-preview">
            <h3>{blog.title}</h3>
            <p>{blog.body}</p>
            <p>Written by: {blog.author}</p>
            <button className="delete-btn" onClick={() => onDelete(blog.id)}>Delete</button>
        </div>
    )
}

export default BlogPreview
