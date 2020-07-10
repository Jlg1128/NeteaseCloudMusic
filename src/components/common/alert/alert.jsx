import React, { Component } from 'react'
import cssobj from './alert.less'

export default class Alert extends Component{

    render(){
        const content = this.props.content?content:'成功发表了消息'
        const visible = this.props.visible?this.props.visible:false 

        
        return (
            <div style={{display:visible?'block':"none"}} className={cssobj.alert}>
               {content}
            </div>
        )
    }
}