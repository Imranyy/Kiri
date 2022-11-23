import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import BlogPage from './pages/BlogPage';
import BlogArticle from './pages/BlogArticle';
import AddBlog from './pages/AddBlog';
import {Toaster} from "react-hot-toast";


function App() {

  return (
  <>
  <Toaster/>
   <Router>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/blogs' element={<BlogPage/>}/>
         <Route path='/blog/add' element={<AddBlog/>}/>
         <Route path='/blog/article' element={<BlogArticle/>}/>
         <Route path='*' element={<NotFound/>}/>
      </Routes> 
   </Router>
  </>
  );
}
 
export default App;
