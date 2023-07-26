import React, {useState, useEffect} from "react";
function App() {
  const [counter, setCounter] = useState(0);
  const [posts, setPosts] = useState([])
  const getData = async()=>{
    const source='https://jsonplaceholder.typicode.com/posts'
    await fetch (source)
    .then(async (result)=>{
      const postArray = await result.json();
      setPosts(postArray)
    })
    .catch((error) => console.log(error))
  
  
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <>
    <h1>Counter</h1>
    <button onClick={() => setCounter(counter - 1)}>-</button>
    <p>{counter}</p>
    <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
  )
}

export default App;
