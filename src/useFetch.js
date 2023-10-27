import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
        setProductList(data); // Fix: Remove 'data' as the first argument
        })
        .catch(error => {
        console.log(error);
        });
    }, [url]);
    return {productList}
}

export default useFetch