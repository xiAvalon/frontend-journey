import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="p-5 flex items-center max-w-150 my-0 mx-auto border-b border-[#f2f2f2]">
            <h1 className="text-3xl text-[#f1356d] font-bold">My Blog</h1>
            <div className="flex gap-4 ml-auto">
                <Link to='/' className="nav-link">Home</Link>
                <Link to='/create' className="nav-link">New Blog</Link>
            </div>
        </nav>
    )
}

export default Navbar
