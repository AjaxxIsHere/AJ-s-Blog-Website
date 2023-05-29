import { useState, useEffect } from "react";

const useFetch = (url) => {
    
    // State variable to store an array of blogs
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect hook with an empty dependency array
    useEffect(() => {
        console.log("use effect ran");
  
    // Fetch data from url
    // 'http://localhost:8000/Blogs'

    fetch(url)
      .then(res => {
        // Check if the response is not ok (e.g., status code >= 400)
        if (!res.ok) {
          throw Error('Could not fetch data from resource');
        }
        // If the response is ok, parse the response body as JSON and return the promise
        return res.json();
      })
      .then(data => {
        // Data successfully fetched
        console.log(data);
        // Update the state variables with the fetched data
        setData(data);
        setIsLoading(false);
        setError(null);
      })
      .catch(error => {
        // An error occurred during the fetching process
        console.error('Error fetching data:', error);
        // Update the state variables to reflect the error state
        setIsLoading(false);
        setError(error.message);
      });
  }, []);

  return {data , isLoading, error}
}

export default useFetch;