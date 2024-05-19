import './App.css'
import {Routes, Route} from "react-router-dom";

import MainPage from "./pages/MainPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import NavBar from "./components/NavBar.jsx";
import SinglePostPage from "./pages/SinglePostPage.jsx";
import PostsPage from "./pages/PostsPage.jsx";
import Layout from "./pages/Layout.jsx";
import LoginPage from "./pages/LoginPage.jsx";

function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<MainPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/posts" element={<PostsPage/>}/>
                <Route path="posts/:postId" element={<SinglePostPage/>}/>
                <Route path="*" element={<h4>Not Found</h4>}/>
            </Route>
        </Routes>
    </>
  )
}

export default App
