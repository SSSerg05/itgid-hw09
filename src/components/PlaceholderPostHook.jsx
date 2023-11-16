import { useEffect, useState } from "react";

export const PlaceholderPostHook = () => {
  const [data, setData] = useState([]);

  useEffect( () => {
    try {
      fetch("https://jsonplaceholder.typicode.com/users/1/posts")
      .then(response => response.json())
      .then(data => {
          console.log(data);
          this.setState({ data });
      });
    
    } catch (error) {
      console.log(error.message);
    }

  }, [data])

  
  return (
    <section>
      <h2> Номер поста. Заголовок</h2>
      <p>Тело поста</p>
    </section>
  )
}

export default PlaceholderPostHook;