import { useState } from "react";
import DropDown from "./components/DropDown";

function App() {
  const [value , setValue] = useState(null)

  const onChange = (option)=>{
    setValue(option)
  }

  // Here we have created an array of object in which we have defined the data which we are going to show in the dropdown.
  const DropDownData = [
    {label:'Red' , value:'Red'},
    {label:'Blue' , value:'Blue'},
    {label:'Green' , value:'Green'},
    {label:'Black' , value:'Black'},
    {label:'Pink' , value:'Pink'}
  ]

  return (
    <>
<DropDown value={value} onChange={onChange} DropDownData={DropDownData}/>
    </>
  );
}


export default App;
