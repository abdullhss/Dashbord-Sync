import React , {useEffect} from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import {FiSettings} from 'react-icons/fi'
import {TooltipComponent} from '@syncfusion/ej2-react-popups'
import {Navbar , Footer , Sidebar , TheamSettings} from "./components/Index"
import {Ecommerce, Orders , Calendar , Employees , Stacked , Pyramid  , Customers , Kanban  ,
        Area , Bar ,Pie , Financial , ColorPicker ,ColorMapping , Editor , Line} from "./pages/Index"
import './App.css'

import { useStateContext } from './contexts/ContextProvider'

export default function App() {
    
    const {activeMenu} = useStateContext()
    return (
    <div>
        <BrowserRouter>
            {/* SETTING ICONE */}
            <div className="flex relative dark:bg-main-dark-bg">
                <div className="fixed right-4 bottom-4" style={{zIndex:"1000"}}>
                    <TooltipComponent content="Settings" position="Top">
                        <button type="button" 
                        className="text-3xl 
                        p-3 hover:drop-shadow-xl
                        hover:bg-light-gray 
                        text-white"
                        style={{background:"blue" , borderRadius:'50%'}}>
                            <FiSettings/>
                        </button>
                    </TooltipComponent>
                </div>
                {/* === END SETTING ICONE === */}
                
                {/* SIDE MENU */}
                
                { activeMenu ? (
                        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                            <Sidebar></Sidebar>
                        </div>
                    ) : (<div className=" w-0 dark:bg-secondary-dark-bg">
                        <Sidebar></Sidebar>
                    </div>)
                }

                {/* === END SIDE MENU === */}

                {/* NAV BAR */}
                <div className={ `dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2 '}` }>
                    <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                        <Navbar></Navbar>
                    </div>
                </div>
                {/* === END NAV BAR === */}

                <div>
                    <Routes>
                        {/* dashBord */}
                        <Route path='/' element={<Ecommerce></Ecommerce>}/>
                        <Route path='/ecommerce' element={<Ecommerce></Ecommerce>}/>
                        
                        {/* Products */}
                        <Route path='/orders' element={<Orders></Orders>}/>
                        <Route path='/employees' element={<Employees></Employees>}/>
                        <Route path='/customers' element={<Customers></Customers>}/>
                        
                        {/* Apps */}
                        <Route path='/kanban' element={<Kanban></Kanban>}/>
                        <Route path='/editor' element={<Editor></Editor>}/>
                        <Route path='/calendar' element={<Calendar></Calendar>}/>
                        <Route path='/color-picker' element={<ColorPicker></ColorPicker>}/>
                        
                        {/* Charts */}
                        <Route path='/line' element={<Line></Line>}/>
                        <Route path='/area' element={<Area></Area>}/>
                        <Route path='/bar' element={<Bar></Bar>}/>
                        <Route path='/pie' element={<Pie></Pie>}/>
                        <Route path='/financial' element={<Financial></Financial>}/>
                        <Route path='/color-mapping' element={<ColorMapping></ColorMapping>}/>
                        <Route path='/pyramid' element={<Pyramid></Pyramid>}/>
                        <Route path='/stacked' element={<Stacked></Stacked>}/>
                        
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    </div>
  )
}
