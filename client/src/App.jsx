import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn.jsx";
import LogIn from "./components/LogIn.jsx";
import BlogPost from "./components/BlogPost.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Error from "./components/Error.jsx";
import NewBlog from "./components/NewBlog.jsx";
import TaggedBlog from "./components/TaggedBlog.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <div className="bg-[#f5f5f5] selection:bg-green-500 selection:text-white">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/newPost" element={<NewBlog />} />
            <Route path="/blogPost/:title" element={<BlogPost />} />
            <Route path="/tags/:tag" element={<TaggedBlog />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </>
  );
}

export default App;
