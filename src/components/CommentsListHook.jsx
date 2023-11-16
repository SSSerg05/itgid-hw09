import { useEffect, useState } from "react";

export const CommentsListHook = ({props}) => {
  const [data, setData] = useState([...props])

  useEffect( () => { 
    console.log('work'); // увы тоже сработает один раз и все. 

    return console.log('component did update');
  }, [data]);


  const onlyEven = () => {

  }

  return (
    <div>
      <div>
	      <button onClick={onlyEven}>Only even comments</button>
      </div>
      {
        data.map((el, index) => (
	        <section key={el.id}>
		        <p><b>{index + 1}. {el.email}</b></p>
		        <p>{el.body}</p>
	        </section>
        ))
      }
    </div>
  )
}

export default CommentsListHook