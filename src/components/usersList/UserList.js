import React, { useState } from 'react'
import './UserList.css';
import { stockData } from './db';
import { Pagination } from './Pagination';



export const UserList = () => {
  const [users, setUsers] = useState(stockData)
  // console.log(users
  const [showPerPage, setShowPerPage] = useState(10)
  const [pagination, setPagination]= useState({
    start:0,
    end:showPerPage,
  })
  const onPaginationChange = (start, end) =>{
    setPagination({start:start, end:end})
  }
 
  return (
    <>
    
      <th className='table-head'>
        <tr>Id</tr>
        <tr>Name</tr>
        <tr>Age</tr>
        <tr>Email</tr>
        <tr>City</tr>
        <tr>Mobile</tr>
      </th>
      {
        stockData.slice(pagination.start,pagination.end).map((users, key)=>{
          return(
            <>   
              <tb className="user-list" key={users.id}>             
              <tr className="id">
                #{users.id}
              </tr>
              <tr className="name">
               {users.firstName}
              </tr>
              <tr className="age">
                  {users.age}
              </tr>
              <tr className="email">
                  {users.email}
              </tr>
              <tr className="city">
                  {users.city}
              </tr>
              <tr className="mobile">
                  {users.mobile}
              </tr>              

              </tb>
              
            </>
          )
        })
      }
     
      <div>
        <Pagination showPerPage={showPerPage}
        onPaginationChange={onPaginationChange}
        total={users.length}/>
      </div>
    </>
  )
}
