import { Link } from "react-router-dom"

function BlogPreview({blog}) {
    return (
        <div className="blog-preview">
            <Link to={`/blogs/${blog.id}`}>
                <h3>{blog.title}</h3>
                <p>Written by: {blog.author}</p>
            </Link>
        </div>
    )
}

export default BlogPreview
