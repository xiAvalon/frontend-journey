import BlogPreview from "./BlogPreview";

function BlogList({blogs, title, onDelete}) {
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => 
                <BlogPreview blog={blog} key={blog.id} onDelete={onDelete} />
            )}
        </div>
    )
}

export default BlogList