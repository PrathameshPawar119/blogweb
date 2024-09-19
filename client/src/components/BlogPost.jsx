import React, { useEffect, useState, useContext, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import DOMPurify from "dompurify";
import "quill/dist/quill.snow.css";

const BlogPost = () => {
  const navigate = useNavigate();
  const { title } = useParams();
  const [blogPost, setBlogPost] = useState(null);
  const { data } = useContext(DataContext);
  const contentRef = useRef(null);
  const [toc, setToc] = useState([]);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      const filteredPost = data.find((post) => post.title === title);
      if (filteredPost) {
        setBlogPost(filteredPost);
      } else {
        navigate("/");
      }
    } else {
      navigate("/");
    }
  }, [data, title, navigate]);

  useEffect(() => {
    if (blogPost && contentRef.current) {
      const sanitizedContent = DOMPurify.sanitize(blogPost.content);
      contentRef.current.innerHTML = sanitizedContent;
      const parser = new DOMParser();
      const doc = parser.parseFromString(sanitizedContent, "text/html");
      const headings = Array.from(doc.querySelectorAll("h1, h2, h3"));
      const tocItems = headings.map((heading, index) => {
        const id = `heading-${index}`;
        heading.id = id;
        return {
          id,
          level: parseInt(heading.tagName.replace("H", ""), 10),
          text: heading.textContent,
        };
      });
      setToc(tocItems);
    }
  }, [blogPost]);

  useEffect(() => {
    if (blogPost) {
      const tags = blogPost.tags || [];
      const related = data.filter(
        (post) =>
          post.tags.some((tag) => tags.includes(tag)) &&
          post.title !== blogPost.title
      );
      setRelatedPosts(related);
    }
  }, [blogPost, data]);

  const scrollToHeading = (id) => {
    const headingElement = document.getElementById(id);
    if (headingElement) {
      headingElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-5xl mx-auto  py-4">
      {blogPost ? (
        <>
          <div
            className="border-2 border-black h-80 overflow-hidden flex items-center justify-center"
            style={{
              backgroundImage: `url(${blogPost.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h2 className="sm:text-4xl text-xl text-white font-bold text-center px-2">
              {blogPost.title}
            </h2>
          </div>
          <div className="border-4 border-black flex items-start justify-center relative">
            <div className="border-2 border-black w-1/3 sticky top-0 sm:block hidden p-2">
              <h6>Table Of Content</h6>
              <ul className="list-decimal list-inside space-y-2 py-3">
                {toc.map((item) => (
                  <li
                    key={item.id}
                    className={`ml-${item.level - 1} font-bold`}
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={() => scrollToHeading(item.id)}
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="sm:w-2/3 w-full border-2 border-black flex items-center justify-center flex-col">
              <div className="border-2 border-black w-full h-2/3 px-2 text-justify">
                <p ref={contentRef}></p>
              </div>
            </div>
          </div>
          {relatedPosts.length > 0 && (
            <div className="mt-10 p-3 border-2 border-black">
              <h3 className="text-2xl font-bold">Related Blogs</h3>
              <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mt-4">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost._id}
                    to={`/blogpost/${relatedPost.title}`}
                  >
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold text-lg">
                        {relatedPost.title}
                      </h4>
                      <p className="text-gray-600">{relatedPost.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BlogPost;
