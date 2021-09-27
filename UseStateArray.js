import React,{useState}from 'react'
import './UseStateArray.css';

function UseStateArray() {
    const bioData = [
    {id:0,myName:"Oliver",age:26},
    {id:1,myName:"Sophia",age:28},
    {id:2,myName:"Emma",age:25},
    {id:4,myName:"James",age:27},
    {id:3,myName:"William",age:29}
    ]
    console.log(bioData);

    return (
        <>
           {bioData.map ((currElement)=> {
               return <h2 className="h1style">Name:{currElement.myName} & Age:{currElement.age}</h2>

           }) }
        </>
    )
}

export default UseStateArray
