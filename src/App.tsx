import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './layouts/Main';
import Login from './admin/Login';
import PostsView from './admin/PostsView';
import Auth from './admin/Auth';
import Post from './layouts/Post';
import PageNotFound from './layouts/PageNotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Main}/>
        <Route path="/post/:id" Component={Post}/>
        <Route path='/25082022' element={<Auth><Login/></Auth>}/>
        <Route path='/25082022/content' element={<Auth><PostsView/></Auth>}/>
        <Route path='/*' Component={PageNotFound}/>
      </Routes>
    </Router>
  )
}

export default App
