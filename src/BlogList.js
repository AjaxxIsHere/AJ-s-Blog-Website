import { Link } from "react-router-dom";

const BlogList = ({ blogs, title, body }) => {
  return (
    <div className="blog-list">
      {/* Render the title */}
      <h2>{ title }</h2>
      
      {/* Iterate over the blogs array and render each blog */}
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          
          <Link to = {`/blogs/${blog.id}`}>  
            {/* Render the blog's title */}
            <h2>{ blog.title }</h2>
            
            {/* Render the blog's author */}
            <p>Written by: <strong>{ blog.author }</strong></p>
            <br></br>
            {/*<p><strong>Info:</strong> {blog.body}</p>*/}
          </Link>
         
          
        </div>
      ))}
    </div>
  );
}

export default BlogList;
