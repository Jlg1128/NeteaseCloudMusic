import React,{Component} from 'react'
import { Modal, Button,Input,} from 'antd';
import {connect} from 'umi' 
import cssobj from './modal.less'
import './modal.less'

 export default class RegisterModal extends Component{
    state={
      phone:'',
      password:''
    }
    handleinput = (name,vaule)=>{
          this.setState({
            [name]:vaule
          })
    }
    handleCancel2=()=>{
        this.props.dispatch({
            type:"recommend/setRegisterVisible",
            payload:false
          })
    }
    login=()=>{
      const {phone,password} = this.state
      this.props.dispatch({
        type:"userinfo/dolog",
        payload:{phone,password}
      })
    }
      render() {
          const {registervisible} = this.props
        return (
          <div>
           <Modal  
              visible={registervisible}
              title="手机号登陆"
              onCancel={this.handleCancel2}
              footer={null}>
              <div className={cssobj.phoneInput}>
                    <Input className={cssobj.phonenumber} onChange={e=>this.handleinput('phone',e.currentTarget.value)} placeholder="请输入手机号"     />
                    <Input.Password className={cssobj.password}  onChange={e=>this.handleinput('password',e.currentTarget.value)} placeholder="请输入密码" />
                    <div>
                      <input type="checkbox" name="" id=""/>
                      自动登录
                      <a href="">忘记密码</a>
                      <Button type='primary' size='big' onClick={this.login} className={cssobj.enterbtn}>登录</Button>
                    </div>
              </div>
              </Modal>
        
          </div>
        );
      }
    
}

// function mapStateToProps(state){

//     return {registervisible:state.recommend.registervisible}
//   }
//   export default connect(mapStateToProps)(RegisterModal)