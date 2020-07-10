import React, { Component } from 'react'
import { connect } from 'umi'
import Nav from '../../components/common/nav/nav'
import Head_nav from '../../components/common/head_nav/head_nav'
import Comment from '../../components/container/comment/comment'
import AddComment from '../../components/container/addcomment/addcomment'

import { Button } from 'antd'
import { PlayCircleOutlined, FolderAddOutlined} from '@ant-design/icons'
import cssobj from './song.less'

class Songinfo extends Component {
    state = {
        songid: 1232,
        isdropdown:false
    }
    exchangeDropdown = ()=>{
        this.setState({
            isdropdown:!this.state.isdropdown
        })
    }
    render() {
        const { dispatch, clickindex } = this.props
        const {isdropdown} = this.state 
        const iconchange = isdropdown?( <i className={cssobj.font}></i> ):( <i className={cssobj.font}></i> )
        const url = 'http://p1.music.126.net/ma8NC_MpYqC-dK_L81FWXQ==/109951163250233892.jpg'
        const currentuser = {avatar:url,username:'jlg'}
    
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
                                    <img src={url} alt="" />
                                </div>
                                <p><a href="">生成外链播放器</a> </p>
                            </div>
                            {/* 歌曲主题界面 */}    
                            <div className={`${cssobj.song_main}  ${cssobj.clearfix}`}>
                                <div className={cssobj.songname}>
                                    <div><span><img style={{ width: 35, height: 35 }} src="/static/tag.png" alt="" />单曲</span><h1 className={cssobj.h1}>邀我怎么办</h1></div>
                                    <div>&nbsp;&nbsp;歌手:<a style={{ color: 'blue' }} href="">&nbsp;&nbsp;李荣浩</a></div>
                                    <div>&nbsp;&nbsp;所属专辑:<a style={{ color: 'blue' }} href="">&nbsp;&nbsp;邀我怎么办</a></div>
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
                                        哈哈哈 <br/>
                                        哈哈哈 <br/>
                                        哈哈哈 <br/>
                                        哈哈哈 <br/>
                                   </div>
                                   <div className={cssobj.lyrics_showed}>
                                        哈哈哈 <br/>
                                        哈哈哈 <br/>
                                        哈哈哈 <br/>
                                        哈哈哈 <br/>
                                   </div>
                                   <div className={cssobj.lyrics_hide}style={{display:isdropdown?'block':'none'}}>
                                        哦哦哦 <br/>
                                        哦哦哦 <br/>
                                        哦哦哦 <br/>
                                        哦哦哦 <br/>
                                   </div>
                                  <div className={cssobj.show}><a style={{color:'blue'}} onClick={()=>this.exchangeDropdown()} >{iconchange}展开</a></div> 
                                </div>
                            </div>
                         </div>   
                            <div className={`${cssobj.comment_wrap} ${cssobj.clearfix}`}>
                      
                                <div>
                                   <span style={{fontSize:20,paddingRight:10,paddingLeft:5}}>评论</span>
                                   <i style={{paddingBottom:3}}>共32132条评论</i></div>
                                <div className={cssobj.redline}></div>
                                <AddComment user={currentuser} />
                                 <h3 style={{fontWeight:'bolder',marginLeft:5}}> 精彩评论</h3>
                                  <Comment  />
                                  <Comment  />
                                  
                                <div className={cssobj.commentStyle}>

                                </div>
                                {/* <Comment  comment={comment}/> */}
                            </div>
                        </div>

                        {/* 相似歌曲 */}
                        <div className={`${cssobj.main_right}`}>
                            <div className={cssobj.samesong}>
                                <h5>相似歌曲</h5>
                                <span style={{ height: 1, backgroundColor: '#000' }}></span>
                                <ul>
                                    <li>
                                        <span className={cssobj.li_songname}>
                                            <h4> <a href="">麻雀</a></h4>
                                            <a href="">李荣浩</a>
                                        </span>
                                        <span className={cssobj.li_singername}>
                                            <PlayCircleOutlined className={cssobj.play} style={{ fontSize: 20 }} />
                                            <FolderAddOutlined className={cssobj.play} style={{ fontSize: 20 }} />
                                        </span>
                                    </li>
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

    return { clickindex: state.recommend.clickindex }
}

export default connect(mapStateToProps)(Songinfo)