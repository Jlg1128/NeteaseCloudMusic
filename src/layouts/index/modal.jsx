import React,{Component} from 'react'
import { Modal, Button,Input, Select} from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import cssobj from './index.less'
import Alert from './alert'
import { SettingOutlined } from '@ant-design/icons';
import './index.less'

export default class ModalWindow extends Component{
    constructor(){
        super()
        this.state={
            checked:false,
            loading:false,
            isshow:true,
            visible:false,
            visible2:false,
            index:1
        }
    }

      handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
          this.props.dispatch({type:'recommend/setVisible',payload:false})}, 3000);

      };
      sendOk=()=>{
        this.setState({
          visible:false
        })

      }
      handleCancel2 = ()=>{
        this.setState({
          visible2:false,
          index:this.state.index+1
        })
        setTimeout(() => {
          this.props.dispatch({type:'recommend/setVisible',payload:false})}, 1000);
      }   
      handleCancel = () => {
        this.props.dispatch({type:'recommend/setVisible',payload:false})};
      render() {
        const { Option } = Select;
        const selectBefore = (
          <Select defaultValue="+86">
            <Option value="+86">+86</Option>
            <Option value="+96">+96</Option>

          </Select>
        );
        const {isshow,loading,visible,visible2} = this.state
        return (
          <div>
            <Alert onOk={this.sendOk} visible={visible} text={'请勾选内容服务条款，隐私政策，儿童隐私条例'} />
           <Modal  
              visible={visible2}
              title="手机号登陆"
              onCancel={this.handleCancel2}
              footer={null}>
              <div className={cssobj.phoneInput}>
                    <Input className={cssobj.phonenumber} placeholder="请输入手机号" addonBefore={selectBefore}  />
                    <Input.Password className={cssobj.password} placeholder="请输入密码" />
                    <div>
                      <input type="checkbox" name="" id=""/>
                      自动登录
                      <a href="">忘记密码</a>
                      <Button type='primary' size='big' className={cssobj.enterbtn}>登录</Button>
                    </div>
              </div>
              </Modal>
            <Modal
            visible={isshow}
              title="登录"
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              footer={null}
            >
              <div className={cssobj.regisiter}>
               <div className={cssobj.regisiter_main}>
                 <Button onClick={()=>this.input.checked?this.setState({visible:false,visible2:true,isshow:false}):this.setState({visible:true})} className={cssobj.enterbyphone} type="primary">手机号登录</Button>
                 <Button className={cssobj.regisiter_btn}>注册</Button>
               </div>
               <div className={cssobj.regisiter_style}>
                 <ul>
                   <li>
                     <a href=""><div><img src="/static/logo.jpg" alt=""/></div></a>
                     <a href="" className={cssobj.enterstyle}>微信登录</a>
                   </li>
                   <li>
                     <a href=""><div><img src="/static/logo.jpg" alt=""/></div></a>
                     <a href="" className={cssobj.enterstyle}>QQ登录</a>
                   </li>
                   <li>
                     <a href=""><div><img src="/static/logo.jpg" alt=""/></div></a>
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
          </div>
        );
      }
    
}