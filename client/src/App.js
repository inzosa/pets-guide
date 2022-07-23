import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Posts from './pages/Posts';
import Home from './pages/Home';
import Pets from './pages/Pets';
import PostDetail from './pages/PostDetail';
import Login from './pages/Login';
import Join from './pages/Join';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pets" element={<Pets />}>
          <Route path=":type" element={<Pets />} />
        </Route>
        <Route path="posts" element={<Posts />} />
        <Route path="posts/:no" element={<PostDetail />} />
        <Route path="login" element={<Login />} />
        <Route path="join" element={<Join />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
