import React  from "react";
import Accordion from "../components/Accordion";





function AccordionPage(){

    const item = [
        {
            id:'asdad',
            label:'This is label 1' ,
            content:'This is content 1'

        },

        {
            id:'dsfas',
            label:'This is label 2' ,
            content:'This is content 2'
        },

        {
            id:'asdfask',
            label:'This is label 3' ,
            content:'This is content 3'
        }
    ]
    

    return(
        <>
<Accordion items={item}  />
        </>
    )
}

export default AccordionPage
