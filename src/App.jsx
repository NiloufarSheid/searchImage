import React, { useState } from 'react';

const App = () => {
  const [data,setData]=useState("");
  const [result,setResult]=useState("");
  const getData=(e)=>{
    setData(e.target.value)
  }
 const fetchImage=()=>{
  fetch(`https://api.unsplash.com/search/photos/?client_id=FdldoVW5XaneXYyrGzrVfFvJTaKcHHs2hlAryb5q2po&query=${data}`)
  .then(res => res.json())
  .then(info => {
    setResult(info.results)

  })
 }


  return (
    <>
    <div className='header'>
      <span>جستجو</span>
      <input onChange={getData} value={data} type="text" />
      <button onClick={fetchImage}>ارسال</button>
    </div>
    <div className="gallery">
      {
        result && result.map((item)=>
        <img key={item.id} src={item.urls.regular} alt="" />
        )
      }
    </div>
    </>
  );
}

export default App;