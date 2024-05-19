import{Routes,Route} from "react-router-dom"
import './App.css'
import Layout from "./pages/Layout"
import MainPage from './pages/MainPage'
import PostMade from './pages/PostMade'
import PostsPage from './pages/PostsPage'

function App() {


  return <>
        <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<MainPage />} />
      <Route path="/postmade" element={<PostMade />} />
      <Route path="/posts" element={<PostsPage/>} />
      <Route path="*" element={<h4>404 Page Not Found</h4>} />
      </Route>
     </Routes>
    </>
}

export default App
