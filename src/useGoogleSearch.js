import { useState, useEffect } from "react";
import API_KEY from "./keys";
//CONTEXT_KEY  FROM Google search Services
const CONTEXT_KEY = "CONTEXT_KEY";

const useGoogleSearch = (term) => {
  const [data, setdata] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setdata(result);
        });
    };

    fetchData();
  }, [term]);
  return { data };
};

export default useGoogleSearch;
