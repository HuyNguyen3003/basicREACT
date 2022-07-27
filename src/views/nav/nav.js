import React from "react";
import './navcss.scss'
import {
    Link
  } from "react-router-dom";
 class Navigation extends React.Component{
render(){
    return(
        <>
        <Link></Link>
             <div className="topnav">
             <Link to="/">Home</Link>
             <Link to="/todo">Todo</Link>
             <Link to="/about">About</Link>
             <Link to="/user">Users</Link>

            </div>
        
        </>
    )
}

 }
 export default Navigation;