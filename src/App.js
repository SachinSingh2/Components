import Button from './components/Button'

function App() {

  const MyFun = ()=>{
    console.log("Hello world")
  }

  return (
    <>

 <div> <Button onClick={MyFun} primary rounded className='my-2 mx-2' >Primary</Button> </div>

 <div> <Button onMouseOver={MyFun} success className='my-2 mx-2' >Secondary</Button> </div>

 <div> <Button outline warning rounded className='my-2 mx-2'>Warning</Button> </div>

 <div> <Button danger outline rounded className='my-2 mx-2'>Success</Button> </div>
 
 <div> <Button secondary outline rounded className='my-2 mx-2'>Danger</Button> </div>

    </>
  );
}


export default App;
