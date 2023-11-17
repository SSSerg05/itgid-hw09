import React, { useEffect, useState } from "react";
// import CommentsListHook from "./CommentsListHook";
import Comments2ListHook from "./Comments2ListHook";

export const Comment2Hook  = () =>  {
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


  const selectHandler = (event) =>{
    console.log(event.target.value);
    
    const getData = async () => {
      try {
        const controller = new AbortController();

        await fetch("https://jsonplaceholder.typicode.com/posts/"+ event.target.value +"/comments", {signal:controller.signal} )
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
  }

  return (
            <div>
                <p>Choose post ID:</p>
                <select onChange={selectHandler}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <div>
                    <h1>Comments</h1>
                    <Comments2ListHook data={data}/>

                </div>
            </div>
        );
}

export default Comment2Hook;