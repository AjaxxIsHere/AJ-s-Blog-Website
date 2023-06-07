/*const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>The AJ Blog</h1>
        <div className="links">
          <a href="/">Home</a>
          <a href="/create" style={{ 
            color: 'white', 
            backgroundColor: '#AAFF00',
            borderRadius: '8px' 
          }}>New Blog</a>
        </div>
      </nav>
    );
  }*/

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    // Navbar component
    <nav className="navbar">
      {/* Logo */}
      <h1>The AJ Blog</h1>
      {/* Navigation links */}
      <div className="links">
        <Link to = "/">Home</Link>
        {/* New Blog button */}
        <Link
          to = "/create"
          style={{ 
            color: 'white', 
            backgroundColor: '#AAFF00',
            borderRadius: '8px' 
          }}
        >
          New Blog
        </Link>
      </div>
    </nav>
  );
}
  
   
  export default Navbar;