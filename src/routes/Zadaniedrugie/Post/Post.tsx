import React from 'react'
import * as SharedTypes from '../../../shared/Types.types'
import * as Types from './Post.types'

export const Post = ({post}: Types.PostProps) => {
  return (
    <div className='flex flex-col rounded-md p-3 gap-2 w-60 drop-shadow-md bg-slate-100'>
        <div className="head font-bold justify-center">
            {post.title}
        </div>
        <div className="body">
            {post.body}
        </div>
    </div>
  )
}
