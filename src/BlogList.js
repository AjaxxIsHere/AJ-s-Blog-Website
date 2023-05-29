const BlogList = ({ blogs, title, /*handleDelete,*/ body }) => {
  return (
    <div className="blog-list">
      {/* Render the title */}
      <h2>{ title }</h2>
      
      {/* Iterate over the blogs array and render each blog */}
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          {/* Render the blog's title */}
          <h2>{ blog.title }</h2>
          
          {/* Render the blog's author */}
          <p>Written by { blog.author }</p>
          <p>Info: {body}</p>
          
        </div>
      ))}
    </div>
  );
}

export default BlogList;
