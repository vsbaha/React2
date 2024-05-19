import './App.css'
import {Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import FormPage from "./pages/FormPage.jsx";
import PostPage from "./pages/PostPage.jsx";
import SinglePostPage from "./pages/SinglePostPage.jsx";

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<FormPage/>}/>
          <Route path='posts' element={<PostPage/>}/>
            <Route path='posts/:postId' element={<SinglePostPage/>}/>
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
