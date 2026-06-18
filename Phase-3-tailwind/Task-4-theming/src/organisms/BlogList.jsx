import BlogPreview from "../molecules/BlogPreview";

function BlogList({blogs, title}) {
    return (
        <div>
            <h2 className="text-2xl">{title}</h2>
            {blogs.map((blog) => 
                <BlogPreview blog={blog} key={blog.id} />
            )}
        </div>
    )
}

export default BlogList