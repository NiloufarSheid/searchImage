import React, { useState } from 'react';

const App = () => {
  const [data,setData]=useState("");
  const getData=(e)=>{
    setData(e.target.value)
  }
 const fetchImage=()=>{
  fetch(`https://api.unsplash.com/search/photos/?client_id=FdldoVW5XaneXYyrGzrVfFvJTaKcHHs2hlAryb5q2po&query=${data}`)
  .then(res => res.json())
  .then(data => {
    console.log(data.results)

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
      <img src="" alt="" />
    </div>
    </>
  );
}

export default App;