import { useState, useEffect } from 'react';
import axios from 'axios';

import 'dotenv/config';

export const useBlogFetch = () => {
  const [postData, setPostData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const blogPostEndpoint = `${process.env.REACT_APP_API_URL}/blog`;
  console.log(blogPostEndpoint);

  // Fetch posts data
  const fetchPostData = () => {
    setLoading(true);
    axios
      .get(blogPostEndpoint)
      .then((response) => {
        setPostData(response.data);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Call data fetch once on page load
  useEffect(() => {
    fetchPostData();
  }, []);

  return [postData, error, loading];
};
