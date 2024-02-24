import React,{useEffect}  from 'react'
import axios from 'axios';


export const useFetchData = (endpoint, id="") => {
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
  
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true)
        try {
          const response = await axios.get(endpoint);
          if (response.data.success) {
            setData(response.data.data);
            setLoading(false)
          } else {
            setError('Error while fetching data');
          }
        } catch (error) {
          setError('Error while fetching data');
        }
      };
  
      fetchData();
  
      // Cleanup function to reset data on unmount or when the dependency changes
      return () => {
        setData(null);
        setError(null);
      };
    }, [endpoint]);
  
    return { data, error,loading };
  };