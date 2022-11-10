import React from 'react'
import * as Types from './Pages.types'

export const Pages = ({currentPage}:Types.PagesProps) => {
    return (
        () =>  {
            switch(currentPage) {
                case 0:
                    return (<div className="formbody flex flex-col gap-3">
                    <div className="formheader text-sky-900 font-medium text-lg">
                        Lorem ipsum
                    </div>
                    <div className="inputs flex flex-col gap-3">
                        <input className='p-1 rounded-lg' placeholder='Name'></input>
                        <input className='p-1 rounded-lg' placeholder='Name'></input>
                        <input className='p-1 rounded-lg' placeholder='Name'></input>
                        <input className='p-1 rounded-lg' placeholder='Name'></input>
                    </div>
                    </div>)
                case 1:
                    return (<div className="formbody flex flex-col gap-3">
                    <div className="formheader text-sky-900 font-medium text-lg">
                        Lorem ipsum
                    </div>
                    <div className="inputs flex flex-col gap-3">
                        <input className='p-1 rounded-lg' placeholder='Name'></input>
                        <input className='p-1 rounded-lg' placeholder='Name'></input>
                        <input className='p-1 rounded-lg' placeholder='Name'></input>
                    </div>
                    </div>)
                case 2:
                    return (<div className="formbody flex flex-col gap-3">
                    <div className="formheader text-sky-900 font-medium text-lg">
                        Lorem ipsum
                    </div>
                    <div className="inputs flex flex-col gap-3">
                        <input className='p-1 rounded-lg' placeholder='Name'></input>
                        <input className='p-1 rounded-lg' placeholder='Name'></input>
                    </div>
                    </div>)
                case 3:
                    return (<div className="formbody flex flex-col gap-3">
                    <div className="formheader text-sky-900 font-medium text-lg">
                        Lorem ipsum
                    </div>
                    <div className="inputs flex flex-col gap-3">
                        <input className='p-1 rounded-lg' placeholder='Name'></input>
                    </div>
                    </div>)
                default:
                    return (<div className="formbody flex flex-col gap-3">
                    <div className="formheader text-sky-900 font-medium text-lg">
                        Lorem ipsum
                    </div>
                    <div className="inputs flex flex-col gap-3">
                        <input className='p-1 rounded-lg' placeholder='Name'></input>
                        <input className='p-1 rounded-lg' placeholder='Name'></input>
                        <input className='p-1 rounded-lg' placeholder='Name'></input>
                        <input className='p-1 rounded-lg' placeholder='Name'></input>
                    </div>
                    </div>) 
                }}  
                 )

}

