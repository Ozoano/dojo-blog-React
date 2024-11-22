import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)
    
  
    useEffect (() => {
      // Clean up function and ABORTCONTROLLER
      const abortcont = new AbortController();
      

        setTimeout(() => {
          // here, we associate the fetch with abortcontroller
          fetch(url, {signal: abortcont.signal})
          .then(res =>{
            if (!res.ok) {
              throw new Error("Could not fetch the data for that resource");
            }
            return res.json()
          })
          .then(data =>{
            // update the blogs with the data
            setData(data)
            // Once the data has loaded, setIsLoading becomes 'false', hence, the 'Loading' msg disappers 
            setIsLoading(false)
            setError(null)
          }).catch(err =>{
            // to hamdle the abort
            if (err.name ==="AbortError") {
              console.log("successfully aborted");
            }
            else{
            // update the setError(err.message)
            setError(err.message);
            setIsLoading(false)
            }
           
          })
        }, 1000);

return () => abortcont.abort() // clean up function
          }, [url])
    return {data, isLoading, error};
}
 
export default useFetch;