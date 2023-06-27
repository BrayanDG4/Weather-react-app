import { useState, useEffect } from "react";

export function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);

    async function fetchData(url) {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setLoading(false);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData(url);
  }, []);

  return { data, loading };
}
