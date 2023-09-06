import React, { useState } from "react"
import Header from "./Header";
import './WatchListStyles.css'
const MyWatchList =({data})=>{
  console.log(data)
    return(
        <>
        <div className="container text-center">
  <div className="row">
    <h1 className="text-primary">My Watch List</h1>
    <div>
      {/* {
        data && data.map((x)=>{
          return(
            <>
            <p>{data.name}</p>
            </>
          )
        })
      } */}
    </div>
  </div>
</div>
        </>
    )
}

export default MyWatchList;