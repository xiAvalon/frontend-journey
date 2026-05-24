import BlogPreview from "./BlogPreview";

function BlogList({blogs, title, onDelete, onUpdate}) {
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => 
                <BlogPreview blog={blog} key={blog.id} onDelete={onDelete} onUpdate={onUpdate} />
            )}
        </div>
    )
}

export default BlogList