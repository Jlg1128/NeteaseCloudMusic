import React,{Component} from 'react'
import cssobj from './index.less'
import './index.less'
import { Modal, Button } from 'antd';

export default class enterbyphone extends Component{
    render(){
        return <Modal ><div className={cssobj.enterbyphone}></div></Modal>
    }
}
