function Navbar() {
    return (
        <nav className="navbar">
            <h1>My Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a className="disabled">
                    New Blog
                </a>
            </div>
        </nav>
    )
}

export default Navbar
