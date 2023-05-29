import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  
  const { data: blogs, isLoading, error} = useFetch('http://localhost:8000/Blogs');
 
  return (
    <div className="home">
      
      {error && <div> { error } </div>}

      {isLoading && <div> Loading... </div>}

      {/* Render the BlogList component with all blogs */}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
      
      
    </div>
  );
}

//Tutorial 20!

export default Home;
