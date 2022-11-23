import React, { useState } from 'react'
import { IoMdSend } from 'react-icons/io'
import { Messages } from './Messages'

export const Chat = () => {

    const [inputValue, setInputValue] = useState("gowno")
    const [messages, setMessages] = useState<{author: string, message: string}[]>([])

    const submit = () => {
        if(inputValue === ""){
            return null
        } else {
            setMessages(prevNames => [{...prevNames, author: "You", message:inputValue}]) 
            setInputValue("")    
        }
             
    }
    

  return (
    <div className='h-[100vh] p-[5%] bg-slate-800 text-slate-100'>
        <div className="chatwindow rounded-lg bg-slate-600 h-96 w-96">
            <div className="flex flex-col justify-between">
                <div className="bg-slate-500 h-16 shadow-sm flex justify-start p-5 text-3xl leading-7 font-medium text-slate-300">
                    <h1 className='shadow-sm'>Chat window</h1>
                </div>
                <div className="h-64 shadow-sm overflow-scroll overflow-x-hidden flex flex-col-reverse gap-3 p-3">
                    <Messages messages={messages}/>
                </div>
                <div className="h-16 flex gap-3 p-3 justify-center bg-slate-500 shadow-sm">
                        <input  value={inputValue} onKeyUp={(e) => {if (e.key === "Enter") {submit();}
          }} onChange={(e) => {setInputValue(e.target.value);}} className="w-[70%] pl-2 rounded-lg shadow-md bg-slate-200 text-slate-900"></input>
                        <button onClick={() => setMessages(prevNames => [...prevNames, inputValue])} className='bg-orange-600 hover:-translate-y-1 hover:bg-orange-500 transition-all w-10 flex justify-center pt-3 rounded-lg shadow-md'>
                            <IoMdSend/> 
                        </button>
                </div>
            </div>
        </div>
    </div>
  )
}
