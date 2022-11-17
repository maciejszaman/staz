import React from 'react'
import * as Types from './MessagesProps.types'

export const Messages = ({messages}:Types.MessagesProps) => {

  return (
    <>
    {
    messages.map((message, index) => {
      return(
        <div key={index} className="flex flex-col p-2 w-fit rounded-lg bg-slate-500">
          <p className='text-xs text-slate-300'>message author</p>
          <p>{message}</p>
        </div>
      )
    })}
    </>
  )
}
