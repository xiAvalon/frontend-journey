import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="text-3xl text-[#f1356d] font-bold">My Blog</h1>
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to='/create'>New Blog</Link>
            </div>
        </nav>
    )
}

export default Navbar
