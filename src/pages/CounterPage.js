import React, { useReducer } from 'react'
import Button from '../components/Button'

const reducer = (state , action)=>{

    // There are three ways to do this First is If else condtion we can use the switch staement too and there is something called immer it is a package first we have to install by install immer then we have to import produce from immer then the we have to wraap the reduce to produce like produce(reduce) then we can use it i am giving an example below of immer .

// Example of immer 
    // switch(action.type){
    //     case increment:
    //       state.count = state.count + 1
    //       return;
      
    //     case decrement: 
    //     state.count = state.count - 1
    //     return;
      
    //     case changeValue:  return{
    //       ...state,
    //       valueToAdd : state.count + action.payload
      
    //     }
      
      
      
    //     case addValueToCount:  return{
    //       ...state,
    //       count : state.count + state.valueToAdd ,
    //       valueToAdd : 0
      
      
    //     }
      
    //     default: return state;
    //   }

    // By switch case 

    switch (action.type) {
        case "increment":
            return{
                ...state,
                count: state.count + 1
            }

            case "decrement":return{
                ...state,
                count: state.count - 1
            }

            case "ChangeValue":return{
                ...state,
                valueToAdd : action.payload
            }

            case "AddValue":return{
                ...state,
                count : state.count + state.valueToAdd,
                valueToAdd : 0
            }
            
            
    
        default: return state
            
    }


// By if else condtion
    // if(action.type === 'increment'){
    //     return{
    //         ...state,
    //         count: state.count + 1
    //     }
    // }

    // if(action.type === 'decrement'){
        // return{
        //     ...state,
        //     count: state.count - 1
        // }
    // }

    // if(action.type === 'ChangeValue'){
    //     return{
            // ...state,
            // valueToAdd : action.payload
    //     }
    // }


    // if(action.type === 'AddValue'){
    //     return{
            // ...state,
            // count : state.count + state.valueToAdd,
            // valueToAdd : 0
    //     }
    // }

    // return state;


};

export default function CounterPage() {

    const [state , dispatch] = useReducer(reducer , {count:0 , valueToAdd:0} )
    console.log(state)



// Function for clickEvent
const increment = ()=>{
dispatch({type : 'increment'})
}
const decrement = ()=>{
dispatch({type : 'decrement'})
}

// Function for handleOnChange and submit.
    const handleOnChange = (e)=>{
        e.preventDefault()

        let value = parseInt( e.target.value)
        console.log(value)

        dispatch({
            type : "ChangeValue",
            payload : value
        })
        
    }
    const handleOnSubmit = (e)=>{
        e.preventDefault()
        dispatch({
            type : 'AddValue'
        })


    }
  return (
    <div>

        <h1 className='text-lg mx-2'>Count = {state.count}</h1>

        <div className='flex flex-row my-2'>
            <Button onClick={decrement} className="mx-2" primary >Decrement</Button>
            <Button onClick={increment} primary>Increment</Button>
        </div>
        

        <form onSubmit={handleOnSubmit}>
            <input value={state.valueToAdd || ''} onChange={handleOnChange} className='border border-gray-500 mx-2 p-1' placeholder='Add Value' type="number" name="" id="Screen" />
            <Button className="mx-2 my-2" primary >Add Value</Button>
        </form>
      



    </div>
  )
}
