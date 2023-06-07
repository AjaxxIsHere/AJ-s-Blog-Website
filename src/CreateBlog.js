import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const Create = () => {

    // State variables for title, body, author, and loading status
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Mario');
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        // Send a POST request to add the new blog
        fetch('http://localhost:8000/Blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog),
        }).then(() => {
            console.log("New Blog Added!");
            setIsLoading(false);
            alert("Blog has been added!");
            history.push("/");
        });
    }

    return ( 
        <div className="create">
            <h2> Create a blog! </h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}/>
                <label>Blog Body</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <label>Blog Author</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Mario">Mario</option>
                    <option value="Yoshi">Yoshi</option>
                </select>
                { !isLoading && <button>Add Blog</button>}
                { isLoading && <button>Adding Blog...</button>}
            </form>
        </div>
    );
}
 
export default Create;
