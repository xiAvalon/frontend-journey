import BlogPreview from "./BlogPreview";

function BlogList({blogs, title}) {
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => 
                <BlogPreview blog={blog} key={blog.id} />
            )}
        </div>
    )
}

export default BlogList