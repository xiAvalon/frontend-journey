import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import BlogDetails from './BlogDetails';
import CreateBlog from './CreateBlog';

function App() {
  return (
    <Router>  
      <div className="App">
        <Navbar />
        <div className='content'>
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