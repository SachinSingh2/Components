import React from 'react'
import SideBar from './components/SideBar'
import ButtonPage from './pages/ButtonPage'
import AccordionPage from './pages/AccordionPage'
import DropDown from './pages/DropDownPage'
import Route from './components/Route'
import ModalPage from './pages/ModalPage'

export default function App() {
  return (
    <div className='container mx-auto grid grid-cols-6 gap-4 mt-4'>
      <SideBar/>

<div className='col-span-5'>
  <Route path='/'>
    <DropDown/>
  </Route>

  <Route path='/Accordion'>
    <AccordionPage/>
  </Route>

  <Route path='/Buttons'>
    <ButtonPage/>
  </Route>

  <Route path='/Modal'>
    <ModalPage/>
  </Route>
</div>

    </div>
  )
}
