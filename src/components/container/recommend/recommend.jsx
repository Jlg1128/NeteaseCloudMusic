import React, { Component } from 'react'
import cssobj from './recommend.less'
import './recommend.less'
import { HeartOutlined, RightOutlined, LeftOutlined, PlayCircleOutlined, FolderAddOutlined, SketchOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { history } from 'umi'

export default class Recommend extends Component {
    constructor() {
        super()
        this.state = {
            musiclistindex: -1,
            musiclistindex1: -1,
            musiclistindex2: -1,
        }
    }
    setVisible = () => {
        this.props.dispatch({ type: "recommend/setVisible", payload: true })
    }
    render() {
        const { userloginfo, HotZhubo, dailyRecommendMusic, HotJoinedSinger, NewestAblum, toplisthot, toplistnewest, toplisthotorigin } = this.props
        const { musiclistindex, musiclistindex1, musiclistindex2 } = this.state
        const { userinfo } = userloginfo
        const url = 'http://p1.music.126.net/ma8NC_MpYqC-dK_L81FWXQ==/109951163250233892.jpg'
        //热门推荐
        const dailyRecommend = () => {
            if (dailyRecommendMusic.lenth > 0) {
                return dailyRecommendMusic.map((item, index) => <li onClick={() => history.push(`/song/${item.id}`)} key={index} className={cssobj.musci_link}>
                    <a key={index} href=""><div ><img src={item.picUrl} alt="" /></div></a>
                    <a href=""><h3>{item.name}</h3></a>
                </li>)
            } else { return (<li><img src={url} onClick={() => { history.push('/song/1460930236') }} alt="" /></li>) }
        }
        //新碟上架
        const newAblum = () => {
            if (NewestAblum.lenth > 0) {
                return (NewestAblum.map((item, index) => <li onClick={() => history.push(`/ablum/${item.id}`)} key={index}>
                    <a href=""><div><img src={item.blurPicUrl} alt="" /></div></a>
                    <a href=""><h3>{item.name}</h3></a>
                    <a href=""><h3>{item.artist.name}</h3></a>
                </li>))
            } else {
                return (<li><img src={url} onClick={() => { history.push('/ablum/1460930236') }} alt="" /></li>)
            }
        }
        //入驻歌手
        const joinedsingerfun = () => {
            if (dailyRecommendMusic.lenth > 0) {
                return HotJoinedSinger.map((item, index) => <div onClick={() => history.push(`/user/home/${item.accountId}`)} key={index} className={cssobj.zhubolist}><div><img src={item.picUrl} alt="" /></div>
                    <a href=""><h3>{item.name}<SketchOutlined style={{ color: "red" }} /></h3> </a>
                </div>)
            } else { return (<li><img src={url} onClick={() => { history.push('/user/home/1460930236') }} alt="" /></li>) }
        }
        //入驻主播
        const hotzhubolist = () => {
            if (HotZhubo.lenth > 0) {
                return HotZhubo.map((item, index) => <div onClick={() => history.push(`/user/home/${item.id}`)} key={index} className={cssobj.zhubolist}><div><img style={{ width: 38, height: 38 }} src={item.avatarUrl} alt="" /></div>
                    <a href=""><h3>{item.nickName}<SketchOutlined style={{ color: "red" }} /></h3> </a>
                </div>)
            } else { return (<li><img src={url} onClick={() => { history.push('/user/home/1460930236') }} alt="" /></li>) }
        }
        //飙升榜
        const toplisthotlist = () => {
            if (toplisthot.lenth > 0) {
                return toplisthot.map((item, index) => <li onClick={() => history.push(`/song/${item.id}`)} key={index} onMouseOut={() => { this.setState({ musiclistindex: -1 }) }} onMouseOver={() => { this.setState({ musiclistindex: index + 20 }) }}>
                    <i className={cssobj.i} style={{ color: (index > 2) ? '' : 'red' }}>{index + 1}</i>
                    <a href="">{item.name}</a>
                    <a href=""><PlayCircleOutlined alt='123' title='嘻嘻' style={{ display: (musiclistindex === index + 20 ? 'block' : 'none') }} className={cssobj.play2} /></a>
                    <a href=""><FolderAddOutlined alt='添加' style={{ display: (musiclistindex === index + 20 ? 'block' : 'none') }} className={cssobj.add2} /></a>
                </li>
                )
            } else {
                return (<li onClick={() => { history.push('/song/1460930236') }} >阿萨德撒大</li>)
            }
        }
        //新歌榜
        const toplistnewestlist = () => {
            if (toplistnewest.lenth > 0) {
                return toplistnewest.map((item, index) => <li onClick={() => history.push(`/song/${item.id}`)} key={index} onMouseOut={() => { this.setState({ musiclistindex1: -1 }) }} onMouseOver={() => { this.setState({ musiclistindex1: index + 20 }) }}>
                    <i className={cssobj.i} style={{ color: (index > 2) ? '' : 'red' }}>{index + 1}</i>
                    <a href="">{item.name}</a>
                    <a href=""><PlayCircleOutlined alt='123' title='嘻嘻' style={{ display: (musiclistindex1 === index + 20 ? 'block' : 'none') }} className={cssobj.play2} /></a>
                    <a href=""><FolderAddOutlined alt='添加' style={{ display: (musiclistindex1 === index + 20 ? 'block' : 'none') }} className={cssobj.add2} /></a>
                </li>
                )
            } else {
                return (<li onClick={() => { history.push('/song/1460930236') }} ></li>)
            }
        }
        //原创榜
        const toplisthotoriginlist = () => {
            if (toplisthotorigin.lenth > 0) {
                return toplisthotorigin.map((item, index) => <li onClick={() => history.push(`/song/${item.id}`)} key={index} onMouseOut={() => { this.setState({ musiclistindex2: -1 }) }} onMouseOver={() => { this.setState({ musiclistindex2: index + 20 }) }}>
                    <i className={cssobj.i} style={{ color: (index > 2) ? 'pink' : 'red' }}>{index + 1}</i>
                    <a href="">{item.name}</a>
                    <a href=""><PlayCircleOutlined alt='123' title='嘻嘻' style={{ display: (musiclistindex2 === index + 20 ? 'block' : 'none') }} className={cssobj.play2} /></a>
                    <a href=""><FolderAddOutlined alt='添加' style={{ display: (musiclistindex2 === index + 20 ? 'block' : 'none') }} className={cssobj.add2} /></a>
                </li>
                )
            } else {
                return (<li onClick={() => { history.push('/song/1460930236') }} ></li>)
            }
        }
        //用户登录按钮以及用户信息显示开关函数
        const denglu = () => {
            if (userloginfo.userlogstatus) {
                return (<div><div className={cssobj.avatar}><img style={{ width: 60, height: 60 }} src={userinfo.avatarUrl} alt="" /></div>
                    <p className={cssobj.username}>{userinfo.nickname}</p>
                    <ul className={cssobj.dongtai}>
                        <li style={{ cursor: 'point' }} onClick={() => history.push(`/user/event?id=${userinfo.userId}`)}><span><h5>{userinfo.authority}</h5><h4><a href="">动态</a> </h4></span></li>
                        <li style={{ cursor: 'point' }} onClick={() => history.push(`/user/follows?id=${userinfo.userId}`)}><span><h5>{userinfo.follows}</h5><h4><a href="">关注</a> </h4></span></li>
                        <li style={{ cursor: 'point' }} onClick={() => history.push(`/user/fans?id=${userinfo.userId}`)}><span><h5>{userinfo.followeds}</h5><h4><a href="">粉丝</a> </h4></span></li>
                    </ul> </div>)
            } else {
                return (<div>                        <p>登录网易云音乐，可以享受无线收藏的乐趣，并且无线同步手机</p>
                    <Button type="primary" onClick={this.setVisible} danger>用户登录</Button></div>)
            }
        }
        return <div className={`${cssobj.reco_wrap} ${cssobj.clearfix}`}>
            <div className={cssobj.reco_main}>
                <div className={cssobj.reco_musiclist}>
                    <div className={`${cssobj.musiclist_main} ${cssobj.clearfix}`}>
                        <ul className={cssobj.musiclist_nav}>
                            <li><a href=""><h3><HeartOutlined />热门推荐</h3></a></li>
                            <li><a href=""><h5>华语</h5></a></li>
                            <li>|</li>
                            <li><a href=""><h5>流行</h5></a></li>
                            <li>|</li>
                            <li><a href=""><h5>摇滚</h5></a></li>
                            <li>|</li>
                            <li><a href=""><h5>民谣</h5></a></li>
                            <li>|</li>
                            <li><a href=""><h5>电子</h5></a></li>
                            <li style={{ float: 'right', marginRight: 10 }}><a href=""><h5>更多<RightOutlined /></h5></a></li>
                        </ul>
                        <ul className={cssobj.musci_link_wrap}>
                            {dailyRecommend()}
                        </ul>
                    </div>
                    {/* 新碟上架版块 */}
                    <div className={`${cssobj.musiclist_main} ${cssobj.clearfix}`}>
                        <ul className={cssobj.musiclist_nav}>
                            <li><a href=""><h3><HeartOutlined />新碟上架</h3></a></li>
                        </ul>
                        <div className={cssobj.musci_link_wrap2}>
                            <a href=""><LeftOutlined className='arrow lf' /></a>
                            <a href=""><RightOutlined className='arrow ri' /></a>
                            <ul>
                                {newAblum()}
                            </ul>
                        </div>
                    </div>
                    {/* //榜单版块 */}
                    <div className={`${cssobj.musiclist_main} ${cssobj.clearfix}`}>
                        <ul className={cssobj.musiclist_nav}>
                            <li><a href=""><h3><HeartOutlined />榜单</h3></a></li>
                        </ul>
                        <div className={cssobj.rankilst}>
                            <ul>
                                <li className={cssobj.rankilst_head}>
                                    <a href=""><div style={{ backgroundColor: '#84abe4' }}>飙升榜</div></a>
                                    <h3>云音乐飙升榜</h3>
                                    <PlayCircleOutlined className={cssobj.play} />
                                    <FolderAddOutlined className={cssobj.add} />
                                </li>
                                {toplisthotlist()}
                            </ul>
                            <ul>
                                <li className={cssobj.rankilst_head}>
                                    <a href=""><div style={{ backgroundColor: '#7ac9ce' }}>新歌榜</div></a>
                                    <h3>云音乐新歌榜</h3>
                                    <PlayCircleOutlined className={cssobj.play} />
                                    <FolderAddOutlined className={cssobj.add} />
                                </li>
                                {toplistnewestlist()}
                            </ul>
                            <ul>
                                <li className={cssobj.rankilst_head}>
                                    <a href=""><div style={{ backgroundColor: '#d77792' }}>歌曲榜</div></a>
                                    <h3>网易原创歌曲榜</h3>
                                    <PlayCircleOutlined className={cssobj.play} />
                                    <FolderAddOutlined className={cssobj.add} />
                                </li>
                                {toplisthotoriginlist()}
                            </ul>
                        </div>
                    </div>
                </div>
                //登录
                <div className={cssobj.reco_singerlist}>
                    <div className={cssobj.singerlist_main}>
                        {denglu()}
                    </div>
                    <div className={cssobj.singerinfo_wrap}>
                        <div className={cssobj.joined_singer}>
                            <h3>入驻歌手</h3>
                            <a onClick={() => history.push('/discover/artist/signed/')}>
                                <i>查看全部</i>
                                <RightOutlined />
                            </a>
                        </div>
                        {joinedsingerfun()}
                        <Button className={cssobj.join_btn}>申请成为合伙人</Button>
                        <div className={cssobj.joined_singer}>
                            <h3>热门主播</h3>
                        </div>
                        {hotzhubolist()}
                    </div>
                </div>
            </div>

        </div>
    }
}