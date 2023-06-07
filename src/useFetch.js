import { useState, useEffect } from "react";

const useFetch = (url) => {
  // State variable to store an array of blogs
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect hook with an empty dependency array
  useEffect(() => {
    console.log("use effect ran");

    // Create a new AbortController instance
    const abortCont = new AbortController();

    // Fetch data from the specified URL
    fetch(url, {signal: abortCont.signal })
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
        if (error.name === 'AbortError') {
          // Fetch was aborted
          console.log("Fetch Aborted");
        }
        else {
          // An error occurred during the fetching process
          console.error('Error! Fetching data:', error);
          // Update the state variables to reflect the error state
          setIsLoading(false);
          setError(error.message);
        }
      });

    // Clean up function to abort the fetch if the component is unmounted
    return () => abortCont.abort();
  }, [url]);

  // Return the state variables as an object
  return {data, isLoading, error};
}


export default useFetch;