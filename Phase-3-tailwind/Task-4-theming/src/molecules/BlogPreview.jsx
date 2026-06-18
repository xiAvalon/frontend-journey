import { Link } from "react-router-dom"

function BlogPreview({blog}) {
    return (
        <div className="flex flex-col gap-2 border-b border-divider mx-0 my-2.5 px-4 py-2.5 hover:shadow-md dark:hover:shadow-none dark:hover:bg-white/5">
            <Link to={`/blogs/${blog.id}`}>
                <h3 className="text-lg text-brand">{blog.title}</h3>
                <p>Written by: <span className="underline">{blog.author}</span></p>
            </Link>
        </div>
    )
}

export default BlogPreview
