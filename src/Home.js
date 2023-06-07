//import { useState, useEffect } from "react";
// Import the BlogList component and the useFetch custom hook
import BlogList from "./BlogList";
import useFetch from "./useFetch";

// Define the Home component
const Home = () => {
  
  // Invoke the useFetch hook to fetch data from 'http://localhost:8000/Blogs'
  const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/Blogs');
 
  return (
    <div className="home">
      
      {/* Display the error message if there is an error */}
      {error && <div> { error } </div>}
      
      {/* Display a loading message if data is still being fetched */}
      {isLoading && <div> Loading... </div>}

      {/* Render the BlogList component with all blogs if blogs data is available */}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
      
    </div>
  );
}


//Tutorial 21!

export default Home;
