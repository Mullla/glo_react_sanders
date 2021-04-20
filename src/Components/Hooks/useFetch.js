import { useState, useEffect } from 'react';

export const useFetch = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const json = await fetch('DB.json');
        const res = await json.json();

        setResponse(res);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, []);

  return { response, error };
};
