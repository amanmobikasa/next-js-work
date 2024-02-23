import { useState,  } from 'react';
import axios from 'axios';

const GlobalPostData = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message , setMessage] = useState("");

  const postData = async (endpoint, postData, headersData=null) => {
    setIsLoading(true);
    try {
      const res = await axios.post(endpoint, postData, headersData);
      setResponse(res.data);
      setMessage(res.message)
      console.log("data response", response);
    } catch (error) {
      setError('Error while posting data');
    } finally {
      setIsLoading(false);
    }
  };


  return { response, error, isLoading, postData, message };
};

export { GlobalPostData }