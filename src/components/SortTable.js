import React, { useState } from 'react'
import Tabel from './Table'
import { GoArrowSmallDown , GoArrowSmallUp } from "react-icons/go";

export default function SortTable(props) {

const [sortOrder , setSortOrder] = useState(null)
const [sortBY , setSortBy] = useState(null)

// Destructuring the props recevied from the table page
const {Fruitdata , config} = props


// Creating a handleClick function 
const handleOnClick = (data)=>{
  console.log(data)
  console.log("Working")
  console.log(sortOrder)
  console.log(sortBY)

  if(sortOrder && data !== sortBY){
    setSortOrder('asc')
    setSortBy(data);
    return
  }

  if(sortOrder === null){
    setSortOrder('asc')
    setSortBy(data)
  }else if (sortOrder === 'asc'){
    setSortOrder('des')
    setSortBy(data)
  }else if (sortOrder === 'des'){
    setSortOrder(null)
    setSortBy(null)
  }

}


// Writing the sorting function 
let sortedData = Fruitdata
if(sortOrder && sortBY){
    const {sortValue} = config.find(column => column.label === sortBY)
   sortedData = Fruitdata.sort((a , b)=>{
        const value1 = sortValue(a)
        const value2 = sortValue(b)

        const reverseOrder = sortOrder === 'asc' ? 1 : -1

        if(typeof value1=== 'string'){
            return (value1.localeCompare(value2)) * reverseOrder
        }else{
            return (value1 - value2) * reverseOrder
        }

    })
}




const updatedConfig = config.map((data)=>{

  if(!data.sortValue){
    return data
  }else{
    return {
      ...data , header: ()=> <th className='cursor-pointer hover:bg-gray-100 px-2 py-1' onClick={()=>{handleOnClick(data.label)}} >                <div className='flex items-center'>
      {getIcons(data.label , sortBY , sortOrder)}
       {data.label} 
       </div></th>
    }
  }

  // return <th>{data.Tabel}</th

})


  return (
    <div>
      <Tabel {...props} data={sortedData}  config={updatedConfig} />
    </div>
  )
}


function getIcons(label , sortBY , sortOrder){
  if(label !== sortBY){
      return <div>
          <GoArrowSmallUp/>
          <GoArrowSmallDown/>
      </div>
  }

  if(sortOrder === null){
      return <div>
      <GoArrowSmallUp/>
      <GoArrowSmallDown/>
  </div>
  }else if (sortOrder === 'asc'){
      return <div>
      <GoArrowSmallUp/>
  </div>
  }else if (sortOrder === 'des'){
      return <div>
      <GoArrowSmallDown/>
  </div>

  }
}
