import React, { useState } from 'react';

const App = () => {
  const [data,setData]=useState("");
  const getData=(e)=>{
    setData(e.target.value)
  }
 
    console.log(data)


  return (
    <>
    <div className='header'>
      <span>جستجو</span>
      <input onChange={getData} value={data} type="text" />
      <button>ارسال</button>
    </div>
    <div className="gallery">
      <img src="" alt="" />
    </div>
    </>
  );
}

export default App;