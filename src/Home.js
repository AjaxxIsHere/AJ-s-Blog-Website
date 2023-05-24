import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  // State variable to store an array of blogs
  const [blogs, setBlogs] = useState(null);

  // Function to handle deleting a blog
  const handleDelete = (id) => {
    // Filter out the blog with the provided id and create a new array
    const newBlogs = blogs.filter(blog => blog.id !== id);
    // Update the blogs state with the new array
    setBlogs(newBlogs);
  }

  // useEffect hook with an empty dependency array
  useEffect(() => {
    console.log("use effect ran");
  
    fetch('http://localhost:8000/Blogs')
      .then(res => res.json())  // <-- Return the promise from res.json()
      .then(data => {
        console.log(data);
        setBlogs(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  

  return (
    <div className="home">
      
      {/* Render the BlogList component with all blogs */}
      {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>}
      
      
    </div>
  );
}

export default Home;
