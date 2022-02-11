import React from 'react'
import './index.less'
import logo from '../../../../assets/img/logo.png'

function Root(){
  return (
    <div styleName='root'>
      <div styleName='container'>
        <img src={logo} alt="logo" />
        <div styleName='title'>a_electron_app</div>
        <div styleName='tips'>a resume making platform</div>
        <div styleName='action'>
          {['介绍','简历','源码'].map(item=>{
            return <span styleName='item' key={item}>{item}</span>
          })}
        </div>
        <div styleName='copyright'>
          <div styleName='footer'>
            <p styleName='copyright'>Copyright 2018-{new Date().getFullYear()} All Rights Reserved. Copyright By Someone</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Root