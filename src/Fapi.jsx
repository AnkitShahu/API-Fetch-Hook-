import React, { useState, useEffect } from 'react';
import useFetch from './useFetch';

export default function App() {

//   const [productList, setProductList] = useState([]);
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos/")
//       .then(response => response.json())
//       .then(data => {
//         setProductList(data); // Fix: Remove 'data' as the first argument
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, []);

const {data: productList} = useFetch('https://jsonplaceholder.typicode.com/todos/')
  return (
    <main>
      <div className="App">
        <ul>
          {Array.isArray(productList) ? (
            productList.map(product => (
              <li>{product.title}</li>
            ))
          ) : (
            <li>No products to display</li>
          )}
        </ul>
      </div>
    </main>
  );
}
