import React, { useEffect, useRef, useState } from 'react'
import { GoTriangleDown , GoTriangleUp } from "react-icons/go";

export default function DropDown({DropDownData , onChange , value}) {
const [isopen ,setIsOpen] = useState(false)


// We are creating a handleClick function which will changethe isopen to false or true
const handleClick = ()=>{
// if(isopen){
//     setIsOpen(false)
// }else{
//     setIsOpen(true)
// }

// Two ways to write this .
setIsOpen(!isopen)
};

// -------------------------------------------------------------------------------------------------------------------------------------------
// Now we are going to create another handleclick which will set the text and close the dropdown.

const handleToSelectAndIsopen = (data)=>{
    onChange(data)
    setIsOpen(false)
};


// Will useeffect and useref method to close the dropdown whenever we click outside the drop down
const divElement = useRef()

useEffect(()=>{
    const handler = (event)=>{

        if(!divElement.current){
            return;
          }

if(!divElement.current.contains(event.target)){
    setIsOpen(false)
}

    };

    document.addEventListener('click' , handler , true )

    return()=>{
        document.removeEventListener('click' , handler)
    }


})


// Now we will map over the prop data and show it .
const RenderData = DropDownData.map((data)=>{
return(
    <div key={data.value}>
    <div  className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={()=>{handleToSelectAndIsopen(data)}}> {data.label} </div>
    </div>
);

}); // MapingOver Ends Here. 

  return (
    <div ref={divElement} className="w-48 relative">
     <div className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full" onClick={handleClick}>{value?.label || 'Select...'} {isopen?<GoTriangleUp/>:<GoTriangleDown/>}</div> 
    {isopen && <div className="absolute top-full  border rounded p-3 shadow bg-white w-full" >{RenderData}</div>} 
    </div>
  )
}
