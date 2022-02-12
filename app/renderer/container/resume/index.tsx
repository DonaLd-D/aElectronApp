import React from 'react'
import './index.less'
import {read} from '@src/utils/file'
import { getPath } from '@src/utils/appPath'

function Resume(){
  getPath().then((root_path:string)=>{
    read(`${root_path}app/renderer/container/resume/index.tsx`)
    .then((data)=>{
      console.log(data)
    })
  })
  return (
    <div>is resume</div>
  )
}

export default Resume