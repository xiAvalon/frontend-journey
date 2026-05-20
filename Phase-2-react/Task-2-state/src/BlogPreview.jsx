function BlogPreview({blog, onDelete, onUpdate}) {
    return (
        <div className="blog-preview">
            <h3>{blog.title}</h3>
            <p>{blog.body}</p>
            <p>Written by: {blog.author}</p>
            <div>
                <button className="delete-btn" onClick={() => onUpdate(blog.id, 'Testing Purposes')}>Edit Title</button>
                <button className="delete-btn" onClick={() => onDelete(blog.id)}>Delete</button>
            </div>
        </div>
    )
}

export default BlogPreview
