import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [error,setError]=useState(null);

  // Fetch data from API Using Axios and Promises
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => setData(res.data))
  //     .catch((err) => setError(err.message));
  // }, []); // empty array to avoid infinite loop
//Note: Using Async Await
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(res.data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, []);

  return (
    // ... Use Axios to fetch data from API
    <>
      <h1>Axios Tutorial</h1>
      {error ? <h2>{error}</h2> : null}
    <div className="grid">
      {data.slice(0,15).map((post) => {
        const { id, title, body } = post;
        return (
          <div className="card" key={id}>
            <h2>{title.slice(0,15).toUpperCase()}</h2>
            <p>{body.slice(0,100)}</p>
          </div>
        );
      })}
      </div>
    </>
  );
}

export default App;
