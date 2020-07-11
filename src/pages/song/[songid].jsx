import React, { Component } from 'react'
import parseLRC from '../../util/util'
import { connect } from 'umi'
import Cookies from 'js-cookie'
import Nav from '../../components/common/nav/nav'
import Head_nav from '../../components/common/head_nav/head_nav'
import Comment from '../../components/container/comment/comment'
import AddComment from '../../components/container/addcomment/addcomment'

import { Button } from 'antd'
import { PlayCircleOutlined, FolderAddOutlined } from '@ant-design/icons'
import cssobj from './song.less'
import userinfo from '../../models/userinfo'

class Songinfo extends Component {
    state = {
        isdropdown: false
    }
    exchangeDropdown = () => {
        this.setState({
            isdropdown: !this.state.isdropdown
        })
    }
    // componentDidMount() {
    //     var musicid = this.props.match.params.songid
    //     var currenuserid = Cookies.get('uid')
    //     //判断用户状态
    //     if (currenuserid && !this.props.userinfo.userId) {
    //         this.props.dispatch({
    //             type: 'userinfo/dogetuserdetail',
    //             payload: parseInt(currenuserid)
    //         })
    //     }
    //     if (this.props.songabout.comments.length === 0) {
    //         console.log(this.props.songabout.comments.length);
    //         // //歌曲信息
    //         this.props.dispatch({
    //             type: "songabout/getMusicInfoAsync",
    //             payload: musicid
    //         })
    //         // 获取歌词
    //         this.props.dispatch({
    //             type: "songabout/getLyricsAsync",
    //             payload: musicid
    //         })
    //         //获取评论
    //         this.props.dispatch({
    //             type: "songabout/getCommentsAsync",
    //             payload: musicid
    //         })
    //         //获取相似歌曲     
    //         this.props.dispatch({
    //             type: "songabout/getSimilarMusicAsync",
    //             payload: musicid
    //         })
    //     }
    // }
    render() {
        const { songabout, dispatch, clickindex, userinfo } = this.props
        const { lyrics, comments, musicInfo, similarMusic } = songabout
        let lrc = parseLRC(lyrics)
        const { isdropdown } = this.state
        const iconchange = isdropdown ? (<i className={cssobj.font}></i>) : (<i className={cssobj.font}></i>)
        const addcommentModule = comments.length > 0 ? <AddComment avatar={userinfo.avatarUrl} username={userinfo.nickname} /> : ''
        let commentsModule = comments.length > 0 ? comments.map((item, index) => {
            return <Comment key={index} comment={item} />
        }) : <div>Loding.....</div>
        return (
            <div>
                <Nav clickindx={clickindex} dispatch={dispatch}></Nav>
                <Head_nav></Head_nav>
                <div className={`${cssobj.outside_wrap} ${cssobj.clearfix}`}>
                    <div className={`${cssobj.main_wrap}`}>
                        {/* 歌曲详情 */}
                        <div className={`${cssobj.main_left} `}>
                            {/* 歌曲logo */}
                            <div className={`${cssobj.wrap} ${cssobj.clearfix}`}>
                                <div className={cssobj.songlogo}>
                                    <div>
                                        {comments.length > 0 ? <img src={musicInfo.picUrl} alt="" /> : <div>Loading</div>}
                                    </div>
                                    <p><a href="">生成外链播放器</a> </p>
                                </div>
                                {/* 歌曲主题界面 */}
                                <div className={`${cssobj.song_main}  ${cssobj.clearfix}`}>
                                    <div className={cssobj.songname}>
                                        <div><span><img style={{ width: 35, height: 35 }} src="/static/tag.png" alt="" />单曲</span><h1 className={cssobj.h1}>{comments.length > 0 ? musicInfo.songname : '加载中'}</h1></div>
                                        <div>&nbsp;&nbsp;歌手:<a style={{ color: 'blue' }} href="">&nbsp;&nbsp;{musicInfo.singername}</a></div>
                                        <div>&nbsp;&nbsp;所属专辑:<a style={{ color: 'blue' }} href="">&nbsp;&nbsp;{musicInfo.albmunname}</a></div>
                                        <div className={cssobj.btns}>
                                            <Button type='primary' style={cssobj.Button} >播放 </Button >
                                            <Button style={cssobj.Button}>下载</Button>
                                            <Button style={cssobj.Button}>收藏</Button>
                                            <Button style={cssobj.Button}>分享</Button>
                                        </div>
                                    </div>
                                    {/* 歌词模块*/}
                                    <div className={`${cssobj.lyrics} `}>
                                        <div className={cssobj.lyrics_singer}>
                                            {lrc.slice(0, 5).map(item => {
                                                return <p>{item}</p>
                                            })}
                                        </div>
                                        <div className={cssobj.lyrics_showed}>
                                            {lrc.slice(5, 17).map(item => {
                                                return <p>{item}</p>
                                            })}
                                        </div>
                                        <div className={cssobj.lyrics_hide} style={{ display: isdropdown ? 'block' : 'none' }}>
                                            {lrc.slice(17).map(item => {
                                                return <p>{item}</p>
                                            })}
                                        </div>
                                        <div className={cssobj.show}><a style={{ color: 'blue' }} onClick={() => this.exchangeDropdown()} >{iconchange}展开</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className={`${cssobj.comment_wrap} ${cssobj.clearfix}`}>
                                <div>
                                    <span style={{ fontSize: 20, paddingRight: 10, paddingLeft: 5 }}>评论</span>
                                    <i style={{ paddingBottom: 3 }}>共32132条评论</i></div>
                                <div className={cssobj.redline}></div>
                                {addcommentModule}
                                <h3 style={{ fontWeight: 'bolder', marginLeft: 5 }}> 精彩评论</h3>
                                {/* 评论 */}
                                {commentsModule}
                            </div>
                        </div>

                        {/* 相似歌曲 */}
                        <div className={`${cssobj.main_right}`}>
                            <div className={cssobj.samesong}>
                                <h5>相似歌曲</h5>
                                <div style={{ height: 1, backgroundColor: 'black' }}></div>
                                <ul>

                                    {similarMusic.map(item => {
                                        return (
                                            <li>
                                                <span className={cssobj.li_songname}>
                                                    <h4> <a href="">{item.name}</a></h4>
                                                    <a href="">{item.artists[0].name}</a>
                                                </span>
                                                <span className={cssobj.li_singername}>
                                                    <PlayCircleOutlined className={cssobj.play} style={{ fontSize: 20 }} />
                                                    <FolderAddOutlined className={cssobj.play} style={{ fontSize: 20 }} />
                                                </span>
                                            </li>
                                        )
                                    })}


                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {

    return { clickindex: state.recommend.clickindex, songabout: state.songabout, userinfo: state.userinfo.userinfo }
}

export default connect(mapStateToProps)(Songinfo)