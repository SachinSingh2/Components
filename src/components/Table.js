import React, { Fragment } from "react";

export default function Tabel({ data, config }) {


  // Here this function is doing is returing the score from data array which is an array of the object
  // const sortedData = (data)=>{
  //   return data.score
  //   }
    

  //   // Then what we are doing is sorting the data with parameters a and b which will be equals to the value1 = sortedData(a) which is data.score[0] and value2 = sortedData(b) which is going to be the data.score(1) and it will kep on repeating untill all the data.score get finished and it can sort it .
  //   const sortOrder = 'des'
  //   data.sort((a,b)=>{
  //   let value1 = sortedData(a)
  //   let value2 = sortedData(b)

  //   const reverseorder = sortOrder==='asc'? 1 : -1

  //   if(typeof value1 === 'string'){
  //     return value1.localeCompare(value2) * reverseorder
  //   }else{
  //     return (value1-value2) * reverseorder
  //   }
    
  //   })




  const RenderRows =  data.map((FruitData , index)=>{

    const RenderCells = config.map((cellData , index )=>{
      return(
        <td className="p-2" key={index}>
          {cellData.render(FruitData)}
        </td>
      )
    });


    return(
      // Fruit data
      <tr key={index} className="border-b">{RenderCells}</tr>
    )
  })

  // Maping over config .
  const Renderth = config.map((thData, index) => {
    if(thData.header){
      return <Fragment key={thData.label}>{thData.header()}</Fragment>
    }else{

      return <th className="my-3" key={index}>{thData.label}</th>;

    }
    
  });

  return (
    <div>
      <table className="table-auto border-spacing-2">
        <thead>
          <tr className="border-b-2">{Renderth}</tr>
        </thead>

        <tbody>{RenderRows}</tbody>
      </table>



    </div>
  );
}
