import React from 'react';
import './style.css';
import {data} from './object.js';

export default function App() {
  return (
    <>
       {
         data.map((ele) => {
           return(
             <div>
               <div>{ele.name}</div>
               <div>{ele.class}</div><br/>
               </div>
           )
         })
       }
    </>
  )
}
