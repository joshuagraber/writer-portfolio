import { useState, useEffect } from 'react';
import axios from 'axios';

export const useBlogFetch = () => {
  const [ postData, setPostData ] = useState([]);
  const [ error, setError ] = useState(null);
  const [ loading, setLoading ] = useState(false);

  const blogPostEndpoint = 'http://localhost:8888/wp-json/wp/v2/blog';

  // Fetch posts data
  const fetchPostData = () => {
    setLoading(true);
    axios
      .get(blogPostEndpoint)
      .then(response => {
        setPostData(response.data);
      })
      .catch(error => {
        console.error(error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      })
  }

  // Call data fetch once on page load
  useEffect(() => {
    fetchPostData();
  }, [])

  return [ postData, error, loading ]
}