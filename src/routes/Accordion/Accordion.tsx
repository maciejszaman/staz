import React, { useState } from 'react'

export const Accordion = () => {
    const [collapsed, setCollapsed] = useState(true)
    const [nameChanging, setNameChanging] = useState(false)
    const [savedName, setSavedName] = useState("Accordion")

    const handleChange = () => {
        setCollapsed(!collapsed)
    }

    const triggerNameChanging = () => {
        setNameChanging(!nameChanging)
    }

    const saveName = (string: string) => {
        setSavedName(string)
    }

    const exitInput = () => {
        triggerNameChanging();
        saveName(savedName)

    }

  return (
    <div className='h-[100vh] bg-green-200'>
        <div className="p-[5%]">
            <div className="bg-slate-100 w-60 leading-10 p-2 shadow-sm rounded-sm flex flex-row justify-between">
                {nameChanging ? <input autoFocus placeholder='New name...' value={savedName} onBlur={exitInput} ></input>:<p onDoubleClick={triggerNameChanging}>Accordion</p>}
                <button className='h-6 w-6 bg-slate-200 mt-2' onClick={handleChange}></button>
            </div>
            <div className={collapsed ? "h-0 w-60 p-2 transition-all opacity-0" : "h-60 transition-all w-60 bg-slate-300 rounded-sm shadow-sm p-2 opacity-100 text-slate-600"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsum facilis quisquam eveniet voluptatum maxime, molestiae doloremque quas modi, eum asperiores a veritatis eligendi enim quidem fugit, ex rem quaerat.  
            </div>            
        </div>

    </div>
  )
}
