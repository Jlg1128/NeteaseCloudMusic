import React, { Component } from 'react'
import cssobj from './alert.less'

export default class Alert extends Component{
    state={
        visible:false,
        content:'成功了'
    }

    componentWillReceiveProps(nextprops){
        if(nextprops.visible){
            this.setState({
                visible:true
            })
            if(this.timer){
                clearTimeout(this.timer)
            }
          this.timer =  setTimeout(() => {
                this.setState({
                    visible:false
                })
            }, 1350);
        }
        if(nextprops.content){
            this.setState({
                content:nextprops.content
            })
        }
    }
    render(){
        const {content} = this.state
        return (
            <div style={{display:this.state.visible?'block':"none"}} className={cssobj.alert}>
               {content}
            </div>
        )
    }
}