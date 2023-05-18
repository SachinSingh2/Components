import Accordion from "./components/Accordion";


function AccordionPage() {

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

  return (
    <>

<Accordion AccordionData={AccordionData}/>


    </>
  );
}


export default AccordionPage;

