import React,{Component} from 'react'
import RegisterModal from './registermodal'
import { Modal, Button,Input, } from 'antd';
import cssobj from './modal.less'
import {connect} from 'umi'
import Alert from '../alert/alert'
import './modal.less'

class ModalWindow extends Component{
      state={
        visible:false
      }
      handleOk=()=>{
        this.props.dispatch({
          type:"recommend/setVisible",
          payload:false
        })
      }
      handleCancel=()=>{
        this.props.dispatch({
          type:"recommend/setVisible",
          payload:false
        })
      }
      handleclick=()=>{
        if(this.input.checked===false){
          this.setState({
            visible:true
          })
          setTimeout(() => {
            this.setState({
              visible:false
            })
          }, 300);
        }else{
          this.props.dispatch({
            type:"recommend/setRegisterVisible",
            payload:true
          })
          this.props.dispatch({
            type:"recommend/setVisible",
            payload:false
          })
        }
    
      }
      render() {
        const {visible,registervisible} = this.props
        return (
          <div>
            <Alert visible={this.state.visible} content={'请勾选服务条款'}/>
            <Modal
            visible={visible}
              title="登录"
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              footer={null}
            >
              <div className={cssobj.regisiter}>
               <div className={cssobj.regisiter_main}>
                 <Button onClick={this.handleclick} className={cssobj.enterbyphone} type="primary">手机号登录</Button>
                 <Button className={cssobj.regisiter_btn}>注册</Button>
               </div>
               <div className={cssobj.regisiter_style}>
                 <ul>
                   <li>
                     <a href=""><div><img src="/static/wxlogo.png" alt=""/></div></a>
                     <a href="" className={cssobj.enterstyle}>微信登录</a>
                   </li>
                   <li>
                     <a href=""><div><img src="/static/qqlogo.png" alt=""/></div></a>
                     <a href="" className={cssobj.enterstyle}>QQ登录</a>
                   </li>
                   <li>
                     <a href=""><div><img src="/static/weibologo.png" alt=""/></div></a>
                     <a href="" className={cssobj.enterstyle}>微博登录</a>
                   </li>
                   <li>
                     <a href=""><div><img src="/static/logo.jpg" alt=""/></div></a>
                     <a href="" className={cssobj.enterstyle}>网易邮箱账号登录</a>
                   </li>
                 </ul>
               </div>
               <div className={cssobj.agreeItem}><input ref={input=>this.input=input}  type="checkbox"/> 同意<a href="">服务条款</a><a href="">隐私政策</a><a href="">儿童隐私政策</a></div>
              </div>
            </Modal>
            <RegisterModal dispatch={this.props.dispatch} registervisible={registervisible} />
          </div>
        );
      }
    
}

function mapStateToProps(state){

  return {visible:state.recommend.visible,registervisible:state.recommend.registervisible}
}
export default connect(mapStateToProps)(ModalWindow)