import React, { useState } from "react"
import Header from "./Header";
import './WatchListStyles.css'
const MyWatchList =(props)=>{
    return(
        <>
        <div className="container text-center">
  <div className="row">
    <h1 className="text-primary">My Watch List</h1>
    <div className="col-lg-6">
      one of three cols
    </div>
    <div className="col-lg-6">
      One of three columns
    </div>
  </div>
</div>
        </>
    )
}

export default MyWatchList;