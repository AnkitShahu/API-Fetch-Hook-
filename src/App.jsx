import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useFetch from './useFetch'

function App() {
  const [count, setCount] = useState(0)


  // const [productList, setProductList] = useState([]);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos/")
  //     .then(response => response.json())
  //     .then(data => {
  //       setProductList(data); // Fix: Remove 'data' as the first argument
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, []);

  const {productList} = useFetch('https://jsonplaceholder.typicode.com/todos/')

  return (
    <>
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
      <h1 className='bg-gray-50'>hello ankit here </h1>
      <div className="card">
        <button className='text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

      </div>
      <p className="read-the-docs">
       Hello Ankit
      </p>
    </>
  )
}

export default App
