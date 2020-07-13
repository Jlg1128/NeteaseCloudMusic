import React, { Component } from 'react'
import cssobj from './hidewindow.less'
import { UnorderedListOutlined,PlayCircleOutlined, LeftCircleOutlined, RightCircleOutlined, PauseCircleOutlined } from '@ant-design/icons'
import './hidewindow.less'

export default class Hidewindow extends Component {
    constructor() {
        super()
        this.state = {
            bottom: -50,
            playlistshow:false,
            isrender:false
        }
    }
    play = ()=>{
        audio.play()
        setTimeout(() => {
    
            this.setState({
                isrender:!this.state.isrender
            })
        }, 0);

    }
    pause = ()=>{
        setTimeout(() => {
            this.setState({
                isrender:!this.state.isrender
            })
        }, 0);
        audio.pause()

    }
    showplaylist = ()=>{
        this.setState({
            playlistshow:!this.state.playlistshow
           })
    }
    showplaylistEnter = ()=>{
        this.setState({
            playlistshow:true
           })
    }
    showplaylistLeave = ()=>{
        this.setState({
            playlistshow:false
           })
    }
    componentWillReceiveProps(){
        if(this.timer2){
            clearTimeout(this.timer2)
        }
       this.timer2 = setTimeout(() => {
        this.setState({
            isrender:!this.state.isrender
        })
        }, 800);
    }
   playmusic = (targetid)=>{    
       if(this.props.likelist.length<=0){
        this.props.dispatch({
            type:"songabout/getMusicInfoAsync",
            payload:targetid
        })
       }
   }
    render() {
        const {songurl,songname,singername,picUrl,likelist} = this.props
        const { bottom,playlistshow} = this.state
        const playbtn = this.audio&&this.audio.paused?<PlayCircleOutlined onClick={this.play} className={cssobj.musicplay} />:<PauseCircleOutlined onClick={this.pause} className={cssobj.musicplay} />
        return <div style={{bottom:`${bottom}`}} className={cssobj.Hidewindow}>
            <div className={cssobj.trandiv}></div>
            <div style={{display:playlistshow?'block':"none"}} onMouseOver={this.showplaylistEnter} onMouseOut={this.showplaylistLeave}  className={`${cssobj.playlist} clearfix`}>
                <div className={cssobj.title}>
                    <span>播放列表({likelist?likelist.length:0})</span>
                </div>
                <ul>
                    {likelist?likelist.map((item,index)=>{
                        return (
                            <li key={index} onClick={()=> this.playmusic(item.id)}>
                            <span className={cssobj.songname}>{item.name}</span>
                        <span className={cssobj.singer}>{item.ar[0].name}</span>
                            <span className={cssobj.time}>02.20</span>
                        </li>
                        )
                    }):<div>Loading</div>}

                </ul>
            </div>
            <div className={cssobj.showwindow}  >
                <div className={cssobj.avatar}>
                    <img style={{width:40,height:40}} src={picUrl} alt=""/>
                </div>
                <div className={cssobj.songinfo}>
                     <span><a href="">{songname}</a></span>
                     <a href="">{singername}</a>
                </div>
                <LeftCircleOutlined className={cssobj.left} />
                {playbtn}
                {/* <PlayCircleOutlined onClick={this.play} className={cssobj.musicplay} />
                <PauseCircleOutlined onClick={this.pause} className={cssobj.musicpause} /> */}
                <RightCircleOutlined  className={cssobj.right} />
                <audio id='audio' ref={audio=>this.audio = audio} src={songurl} loop>歌曲</audio>
                <UnorderedListOutlined className={cssobj.btn} onClick={this.showplaylist}></UnorderedListOutlined>
            </div>

        </div>  
    }

}   