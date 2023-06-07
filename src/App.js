import Navbar from './NavBar';
import Home from './Home';
import Create from './CreateBlog';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from './BlogDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path = "/">
              <Home />
            </Route>
            <Route exact path = "/create">
              <Create />
            </Route>
            <Route exact path = "/blogs/:id">
              <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

// Tutorial 30!

export default App;