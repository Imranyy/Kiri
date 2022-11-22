import './App.css';
import 'bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import BlogPage from './pages/BlogPage';


function App() {

  return (
  <Router>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/blogs' element={<BlogPage/>}/>
         <Route path='*' element={<NotFound/>}/>
      </Routes> 
   </Router>
  );
}
 
export default App;
