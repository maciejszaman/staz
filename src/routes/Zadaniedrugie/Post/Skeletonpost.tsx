import React from 'react'
import * as SharedTypes from '../../../shared/Types.types'
import * as Types from './Post.types'

export const Skeletonpost = () => {
  return (
    <div className='bg-gradient-to-r from-slate-50 to-slate-100 animate-pulse w-60 h-64 rounded-md p-3 gap-2 w-60 drop-shadow-md'>
    </div>
  )
}
