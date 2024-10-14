import React from 'react'
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs'
import {Header} from "../components/Index"
const changeColor = (params)=>{
  document.getElementById("preview").style.backgroundColor=params.currentValue.hex
}
export default function ColorPicker() {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="App" title="Color Picker" />
      <div className='text-center'>
        <div id="preview"/>
        <div className='flex justify-center items-center gap-40 flex-wrap'>
          <div>
            <p className='text-2xl font-semibold mt-2 mb-4'>Inline Pallete</p>
            <ColorPickerComponent change={changeColor} id='inline-pallete' mode="Palette" modeSwitcher={false} inline showButtons={false}/>
          </div>
          <div>
            <p className='text-2xl font-semibold mt-2 mb-4'>Inline Picker</p>
            <ColorPickerComponent change={changeColor} id='inline-picker' mode="Picker" modeSwitcher={false} inline showButtons={false}/>
          </div>
        </div>
      </div>
    </div>
  )
}
