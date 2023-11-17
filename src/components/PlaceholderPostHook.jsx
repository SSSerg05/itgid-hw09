import { useEffect, useState } from "react";

export const PlaceholderPostHook = () => {
  const [data, setData] = useState([]);

  useEffect( () => {

    const getData = async () => {
      try {
        const controller = new AbortController();

        await fetch("https://jsonplaceholder.typicode.com/users/1/posts", {signal:controller.signal} )
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data);
        });
      
      } catch (error) {
        console.log(error.message);
      }
    }

    getData();
  }, []);

  
  return (
    <div>
      <h1>Posts</h1>
      { data.map((el, index) => (
          <section key={el.id}>
              <h2>{index+1}. {el.title}</h2>
              <p>{el.body}</p>
          </section>
        ))}
    </div>
  )
}

export default PlaceholderPostHook;