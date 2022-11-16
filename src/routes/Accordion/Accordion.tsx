import React, { useState } from 'react'
import {IoIosArrowDown} from 'react-icons/io'

export const Accordion = () => {
    const [collapsed, setCollapsed] = useState(true)
    const [secondCollapsed, setSecondCollapsed] = useState(true)
    const [nameChanging, setNameChanging] = useState(false)
    const [accordionName, setAccordionName] = useState("Accordion")
    const [inputValue, setInputValue] = useState("")

    const handleChange = () => {
        setCollapsed(!collapsed)
    }

    const handleSecondChange = () => {
        setSecondCollapsed(!secondCollapsed)
    }

    const triggerNameChanging = () => {
        setNameChanging(!nameChanging)
    }



  return (
    <div className='h-[100vh] bg-green-200'>
        <div className="p-[5%]">
            <div className="bg-slate-100 w-60 leading-10 p-2 shadow-sm rounded-sm flex flex-row justify-between">
                {nameChanging ? <input autoFocus placeholder='New name...' value={inputValue} onKeyUp={(e) => {if (e.key === "Enter") {
                    if(inputValue.length < 20 ){
                        setAccordionName(inputValue)
                        setNameChanging(!nameChanging)
                    }
                    }}} onBlur={triggerNameChanging}
                    onChange={(e) => {
                    setInputValue(e.target.value);
                    }}></input>
                  :
                  <p onDoubleClick={triggerNameChanging}>{accordionName}</p>}
                <button className={collapsed ? 'rotate-0 transition-all' : 'rotate-180 transition-all'} onClick={handleChange}>
                <IoIosArrowDown/>
                </button>
            </div>
            <div className={collapsed ? "h-0 w-60 overflow-hidden" : "h-auto w-60 bg-slate-200 rounded-sm shadow-sm text-slate-600"}>
                <div className="bg-slate-100 w-60 leading-10 p-2 shadow-sm rounded-sm flex flex-row justify-between">
                    <p>Accordion</p>
                    <button className={secondCollapsed ? 'rotate-0 transition-all' : 'rotate-180 transition-all'} onClick={handleSecondChange}>
                    <IoIosArrowDown/>
                    </button>
                </div>
                    <div className={secondCollapsed ? "h-0 w-60 overflow-hidden" : "h-auto w-60 shadow-sm rounded-md"}>
                        <p className='p-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci provident praesentium labore tempora ratione corrupti inventore totam aspernatur illum quam, alias porro ullam aut a quibusdam quis saepe, optio quas?</p>
                    </div>
                    <p className='p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsum facilis quisquam eveniet voluptatum maxime, molestiae doloremque quas modi, eum asperiores a veritatis eligendi enim quidem fugit, ex rem quaerat.</p>
            </div>            
        </div>

    </div>
  )
}
