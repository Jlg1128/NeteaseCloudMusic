import React,{Component} from 'react'
import cssobj from './hidewindow.less'
import {PlayCircleOutlined,LeftCircleOutlined,RightCircleOutlined,PauseCircleOutlined} from '@ant-design/icons'
import './hidewindow.less'

export default class Hidewindow extends Component{
    constructor(){
        super()
        this.state={
            bottom:-50,
        }
    }
    setBottom=(e)=>{
        this.setState({isEntered:true}) 
    }
    backbottom=()=>{
        this.setState({isEntered:false}) 
    }
    render(){
        return  <div  className={cssobj.Hidewindow}>
                   <div  className={cssobj.trandiv}></div>
                   <div  className={cssobj.showwindow}  >
                       <LeftCircleOutlined />
                       <RightCircleOutlined />
                       <PlayCircleOutlined className={cssobj.musicplay} />
                       <PauseCircleOutlined />
                       <i className='font'></i>
                   </div>
               </div>
    }

    }   