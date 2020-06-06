import React from 'react'
import cssobj from '../publiccom/public.less'
import '../publiccom/public.less'
import {Input } from 'antd'
import { AudioOutlined } from '@ant-design/icons';
import {Link} from 'umi'

export default class Nav extends React.Component{
     constructor(){
         super()
         this.state={
             clickindex:-1
         }
     }
    render(){
        const { Search } = Input;
        const {clickindex}=this.state
        return <div className={cssobj.nav}>
                  <h1 className='logo'>
                      <Link to='/'>
                      <img src="/static/logo.jpg" alt=""/>
                        网易云音乐
                     </Link>
                  </h1>
                  <ul className={cssobj.nav_ul}>
                      <li><Link className='link' style={{backgroundColor:(clickindex===0)?'black':''}} onClick={()=>this.setState({clickindex:0})}>发现音乐</Link></li>
                      <li><Link className='link' style={{backgroundColor:(clickindex===1)?'black':''}} onClick={()=>this.setState({clickindex:1})}>我的音乐</Link></li>
                      <li><Link className='link' style={{backgroundColor:(clickindex===2)?'black':''}} onClick={()=>this.setState({clickindex:2})}>朋友</Link></li>
                      <li><Link className='link' style={{backgroundColor:(clickindex===3)?'black':''}} onClick={()=>this.setState({clickindex:3})}>商城</Link></li>
                      <li><Link className='link' style={{backgroundColor:(clickindex===4)?'black':''}} onClick={()=>this.setState({clickindex:4})}>音乐人</Link></li>
                      <li><Link className='link' style={{backgroundColor:(clickindex===5)?'black':''}} onClick={()=>this.setState({clickindex:5})}>下载客户端</Link></li>
                      <Search placeholder="音乐/视频/电台/用户" allowClear='true' className={cssobj.nav_search} onSearch={value => console.log(value)}/>
                  </ul>
                      <button className={cssobj.btn}>创作者中心</button>
                      <a className={cssobj.register} href="">登录</a>
               </div>
    }
}   