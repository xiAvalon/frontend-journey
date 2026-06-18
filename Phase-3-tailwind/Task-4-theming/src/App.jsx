import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './organisms/Navbar';
import BlogDetails from './pages/BlogDetails';
import CreateBlog from './pages/CreateBlog';

function App() {
  return (
    <Router>  
      <div className="App">
        <Navbar />
        <div className='max-w-150 my-6 mx-auto p-4 md:my-10 md:p-8'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<CreateBlog />} />
            <Route path='/blogs/:id' element={<BlogDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;