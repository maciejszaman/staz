import React, { useState } from 'react'
import { Pages } from './Pages/Pages'

export const Form = () => {

  const [currentPage, setCurrentPage ] = useState(0)


  return (
    <div className='h-[100vh] bg-sky-300'>
      <div className="wrapper pt-[5%] pb-[5%] pl-[10%] pr-[10%]">
        <div className="form p-3 flex flex-col bg-sky-200 h-full w-full rounded-lg">
          <div className="rounded-lg flex justify-end">
            <p className='bg-sky-300 w-[10%] text-center p-1 rounded-xl'>{`${currentPage}/3`}</p>
          </div>
            <Pages currentPage={currentPage}/>
          <div className="nav justify-end flex flex-row gap-6 pt-6">
            <button onClick={() => setCurrentPage(currentPage - 1)}className={currentPage !== 0?`bg-sky-300 w-[20%] p-1 rounded-xl`:'bg-sky-300 text-sky-500 pointer-events-none w-[20%] p-1 rounded-xl'}>Previous</button>
            <button onClick={() => setCurrentPage(currentPage + 1)}className={currentPage !== 3?'bg-sky-300 w-[20%] p-1 rounded-xl':'bg-sky-300 text-sky-500 pointer-events-none w-[20%] p-1 rounded-xl'}>Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}
