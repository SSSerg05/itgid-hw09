import { useEffect, useState } from "react";

export const Comments2ListHook = ({data}) => {
  const [data2, setData2] = useState([...data]);
  console.log('2list', data2);
  
  useEffect(() => {
    console.log('effect');

    if (data.length > 0) {
      setData2([...data]);
    }
  }, [data]);
  
  const onlyEven = () => {
    const a = [...data2];
    const evenPost = a.filter((item, index) => (index % 2))
    setData2([...evenPost]);
  }

  return (
    <div>
      <div>
	      <button onClick={onlyEven}>Only even comments</button>
      </div>
      {!data2.length && <div>Array Data - empty</div>}
      {
        data2.map((el, index) => (
	        <section key={el.id}>
		        <p><b>{index + 1}. {el.email}</b></p>
		        <p>{el.body}</p>
	        </section>
        ))
      }
    </div>
  )
}

export default Comments2ListHook