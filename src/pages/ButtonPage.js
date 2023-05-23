import React  from "react";
import Button from '../components/Button'
import { GoCheck , GoComment , GoCloudUpload } from "react-icons/go";


function ButtonPage(){
//It is a checking function
const checkfun = ()=>{
    console.log("Hello world")
};
    

    return(
        <>

<div> <Button rounded primary onMouseOver={checkfun} className='mb-3' onClick={checkfun}> <GoCheck/> Click me</Button></div>
<div> <Button className='mb-3' secondary  > <GoComment  /> Buy now</Button></div>
<div> <Button className='mb-3' warning outline > <GoCloudUpload  /> See deals</Button></div>
<div> <Button className='mb-3'  danger outline >Hide ads</Button></div>
<div> <Button className='mb-3'  success  >Something</Button></div>

        </>
    )
}

export default ButtonPage