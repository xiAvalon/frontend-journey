import { useEffect, useState } from "react";

function useFetch(url) {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        fetch(url, { signal: controller.signal })
        .then(res => {
            if(!res.ok){
                throw new Error('Failed to fetch data');
            }
            return res.json()
        })
        .then(data => {
            setData(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err => {
            if(err.name === 'AbortError') console.log('fetch aborted');
            else{
                setIsPending(false);
                setError(err.message);
            }
        });

        return () => controller.abort();
    }, [url]);

    return {data, isPending, error}
}

export default useFetch
