import React from "react";
// import Table from '../components/Table'
import SortTable from "../components/SortTable";

export default function TabelPage() {
  // Creating an array of data which we want to show through our tabel
  const Fruits = [
    { name: "Apple", color: "bg-red-500", score: 5 },
    { name: "Orange", color: "bg-orange-500", score: 4 },
    { name: "Banana", color: "bg-yellow-500", score: 3 },
    { name: "Lime", color: "bg-green-500", score: 2 },
  ];

  //   Creating a config array by which we can create reusable table
  const config = [
    {
       label: "Fruits", 
       render: (Fruits) => Fruits.name,
       sortValue : (Fruits)=> Fruits.name

      },
    {
      label: "Colors",
      render: (Fruits) => <div className={`p-3 m-2 ${Fruits.color}`}></div>,
    }, 

    { label: "Score",
     render: (Fruits) => Fruits.score,
     sortValue:(Fruits)=>Fruits.score
    },
  ];

  return (
    <div>
      <SortTable Fruitdata={Fruits} config={config} />
      {/* <Table  data={Fruits} config={config}  /> */}
    </div>
  );
}
