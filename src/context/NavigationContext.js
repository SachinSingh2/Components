const { createContext, useState, useEffect } = require("react");
const NavigationContext = createContext()

function NavigationProvider({children}){
    
    // Using usestate method we are creating a currentPath which will tell us what is the location of the page .
    const [currentPath , setCurrentPath]= useState(window.location.pathname)

    // Using useeffect hook to create a handler which will work whenever a popstate method runs
    useEffect(()=>{

        const handler = (e)=>{
            setCurrentPath(window.location.pathname)
            console.log(window.location.pathname)
        };

        window.addEventListener('popstate' , handler)

        return ()=>{
            window.removeEventListener('popstate' , handler)
        }
    },[])


    // Creating a navigate function 
    const navigate = (to)=>{
        window.history.pushState({} , ' ' , to)
        setCurrentPath(to)
    };


    return(
        <>

<NavigationContext.Provider value={{currentPath , navigate}}>
    {children}
</NavigationContext.Provider>
        </>
    )
}


export default NavigationContext;
export {NavigationProvider};