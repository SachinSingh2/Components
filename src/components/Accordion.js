import React, { useState } from 'react'
import { GoTriangleUp , GoTriangleDown } from "react-icons/go";

export default function Accordion() {
    // First we will create an array of object which will store the data of the accordion.
    const AccordionData = [
        {
            id:'adfass',
            Heading:'This is Title 1',
            Content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ullam natus earum nesciunt tenetur debitis, fuga vero? Nulla, laudantium sapiente laboriosam ex inventore placeat corporis explicabo incidunt quisquam! Maiores, pariatur!'
            
        },
        {
            id:'adsad',
            Heading:'This is Title 2',
            Content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ullam natus earum nesciunt tenetur debitis, fuga vero? Nulla, laudantium sapiente laboriosam ex inventore placeat corporis explicabo incidunt quisquam! Maiores, pariatur!'
            
        },
        {
            id:'dgdass',
            Heading:'This is Title 3',
            Content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ullam natus earum nesciunt tenetur debitis, fuga vero? Nulla, laudantium sapiente laboriosam ex inventore placeat corporis explicabo incidunt quisquam! Maiores, pariatur!'
            
        }
    ]

    // We will use useState hook here to change the state .
    const [expandedIndex, setExpandedIndex] = useState()

    // Creating a handleclick function to use it on the heading so whenever someone click on the heading a function take place.
    const handleclick = (nextindex)=>{

        // There are also two ways to declare this function first we can write inline : Example=: index===expandedIndex?setExpandedIndex(-1):setExpandedIndex(index) else we can do the following create a seprate function for this to happen.

        if(nextindex===expandedIndex){
            setExpandedIndex(-1)
        }else{
            setExpandedIndex(nextindex)
        }


    };



    // Now we will create a render Function.
    const renderInfo = AccordionData.map((data,index)=>{

        // There are two ways to write this first one is --  const willExpand = expandedIndex === index and the second one is -- expandedIndex === index && data.Content.

        const willExpand = expandedIndex === index
        console.log(willExpand)

        const icon = <span className='text-3xl'>{willExpand?<GoTriangleUp/>:<GoTriangleDown/>}</span>



        return(  
           <div key={data.id} >
            
            <div className='flex justify-between text-xl bg-slate-50 border-b border-t  py-3 px-8' onClick={()=>{handleclick(index)}}>{data.Heading}  {icon}  </div>


           {/* Two ways two write this */}
           {willExpand && <div className='border p-5'>{data.Content}</div>}
            {/* {willExpand?<div className='border p-5'>{data.Content}</div>:willExpand===false} */}
             

           </div>
        )
    })


  return (
    <>
      <div>
        {renderInfo}
      </div>
    </>
  )
}
