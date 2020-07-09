import React from 'react'
import cssobj from './nav.less'
import './nav.less'
import { Menu, Dropdown, Input } from 'antd';
import { Link } from 'umi'
import { history } from 'umi'

export default class Nav extends React.Component {
    constructor() {
        super()
        this.state = {
            dropdowninfo: [
                { href: '/user/home', title: "我的主页" },
                { href: '/msg/m/private', title: "我的消息" },
                { href: '/user/level', title: "我的等级" },
                { href: '/member', title: "VIP会员" },
                { href: '/user/update', title: "个人设置" },
                { href: '/user/home', title: "实名认证" },
                { href: '/user/home', title: "退出" },
            ],
            clickindex: -1
        }
    }
    log = () => {
        this.props.dispatch({ type: "recommend/setVisible", payload: true })
    }
    render() {
        const { dropdowninfo } = this.state
        const menu = (
            <Menu>
                {dropdowninfo.map((item, index) => {
                    return (
                        <Menu.Item key={index}>
                            <h3 target="_blank" rel="noopener noreferrer" onClick={() => history.push(item.href)}>
                                {item.title}
                            </h3>
                        </Menu.Item>
                    )
                })}
            </Menu>
        );
        const { logstatus,avatarurl } = this.props
        const { Search } = Input;
        const { clickindex } = this.state
        const profileshow = () => {
            if (logstatus) {
                return (<Dropdown arrow overlay={menu} placement='bottomCenter' >
                    <img src={avatarurl} style={{ width: 35, height: 35, marginTop: 20, marginLeft: 10, borderRadius: '50%' }} alt="头像" />
                </Dropdown>)
            } else {
                return (<h3 className={cssobj.register} onClick={this.log} href="">登录</h3>)
            }
        }
        return <div className={cssobj.nav}>
            <h1 className='logo'>
                <Link to='/'>
                    <img src="/static/logo.jpg" alt="" />
                    <h3 style={{ color: 'white' }}>网易云音乐</h3>
                </Link>
            </h1>
            <ul className={cssobj.nav_ul}>
                <li><a className='link' style={{ backgroundColor: (clickindex === 0) ? 'black' : '' }} onClick={() => this.setState({ clickindex: 0 })}>发现音乐</a></li>
                <li><a className='link' style={{ backgroundColor: (clickindex === 1) ? 'black' : '' }} onClick={() => this.setState({ clickindex: 1 })}>我的音乐</a></li>
                <li><a className='link' style={{ backgroundColor: (clickindex === 2) ? 'black' : '' }} onClick={() => this.setState({ clickindex: 2 })}>朋友</a></li>
                <li><a className='link' style={{ backgroundColor: (clickindex === 3) ? 'black' : '' }} onClick={() => this.setState({ clickindex: 3 })}>商城</a></li>
                <li><a className='link' style={{ backgroundColor: (clickindex === 4) ? 'black' : '' }} onClick={() => this.setState({ clickindex: 4 })}>音乐人</a></li>
                <li><a className='link' style={{ backgroundColor: (clickindex === 5) ? 'black' : '' }} onClick={() => this.setState({ clickindex: 5 })}>下载客户端</a></li>
                <Search placeholder="音乐/视频/电台/用户" allowClear='true' className={cssobj.nav_search} onSearch={value => console.log(value)} />
            </ul>
            <button className={cssobj.btn}>创作者中心</button>
            {profileshow()}
        </div>
    }
}   