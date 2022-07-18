import { useEffect, useState } from 'react';

function useJsonFetch(url, opts = null) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, opts);
        if (response.ok) {
          const data = await response.json();
          setData(data);
          setError(null);
        } else {
          setError(response.statusText);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url, opts]);

  return [data, error, loading];
}

export default useJsonFetch;
