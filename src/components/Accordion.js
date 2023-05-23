import React, { useState } from 'react'
import { GoTriangleUp , GoTriangleDown } from "react-icons/go";

export default function Accordion({items}) {

  const [expandedIndex , setExpendedIndex] = useState()




  // It is a function which we have assign on if we click the label
  const handleonclick = (nextIndex)=>{


    if(nextIndex===expandedIndex){
      setExpendedIndex(-1)
    }else{
      setExpendedIndex(nextIndex)
    }

  };



  // Function to render the data .
    const renderData = items.map((data , index)=>{

      const isExpanded = index === expandedIndex
      console.log(isExpanded)
      console.log(index)

      const icon = <span className='text-2xl'>{isExpanded?<GoTriangleDown/>:<GoTriangleUp/>}</span>

        return (  // Retrun of map function
        <div key={data.id}>
            <div className='flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer ' onClick={()=>{handleonclick(index)}} >   {data.label}  {icon} </div>
  
            {/* we can write this in two ways first is we can write it like the following or ... */}
            {/* {isExpanded?<div>{data.content}</div>:isExpanded===false} */}
            {isExpanded && <div className='border-b p-5' >{data.content}</div>}
            {/* <div><button onClick={()=>setExpendedIndex(index)} >ClickToExpand</button></div> */}
        </div>
        )   
    })





  return (
    <>

{/* Rendering the data from items */}
<div className='border-x border-t rounded'>
{renderData}
</div>

    </>
  )
}
