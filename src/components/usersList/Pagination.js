import React, { useState, useEffect } from 'react';

import './Pagination.css'

export const Pagination = ({showPerPage, onPaginationChange, total}) => {
  console.log(total);
  const [counter, setCounter] = useState(1);
  useEffect(()=>{
    const value = showPerPage * counter;
    console.log(value - showPerPage)
    console.log(value)
    onPaginationChange(value - showPerPage, value)
  },[counter])

  const onButtonClick = (type) =>{
    if(type === "prev"){
      if(counter === 1){
        setCounter(1)
      }else{
        setCounter(counter - 1)
      }
    }else if(type === "next"){
      if(Math.ceil(total/showPerPage) === counter){
        setCounter(counter)
      }else{
        setCounter(counter + 1)
      }
    }
  }
  return (
    <div className='pagination'>       
        <button onClick={()=> onButtonClick("prev")}>
            previous
        </button>
        <button onClick={()=> onButtonClick("next")}>
            next
        </button>
    </div>
  )
}

