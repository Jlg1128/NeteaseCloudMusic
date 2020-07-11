import React, { Component } from 'react'
import cssobj from './hidewindow.less'
import { PlayCircleOutlined, LeftCircleOutlined, RightCircleOutlined, PauseCircleOutlined } from '@ant-design/icons'
import './hidewindow.less'

export default class Hidewindow extends Component {
    constructor() {
        super()
        this.state = {
            bottom: -50,
            playChecked: false,
            leftChecked: false,
            rightChecked: false,
        }
    }
    setBottom = (e) => {
        this.setState({ isEntered: true })
    }
    backbottom = () => {
        this.setState({ isEntered: false })
    }
    setleftChecked = () => {
        this.setState({
            leftChecked: !this.state.leftChecked,
            playChecked: false,
            rightChecked: false
        })
        console.log(audio);
        if(audio.paused){
            audio.play()
        }
    }
    setplayChecked = () => {
  
        if(audio.played){
            audio.pause()

        }
        console.log('ok');

        this.setState({
            playChecked: !this.state.playChecked,
            leftChecked: false,
            rightChecked: false,
        })
    }
    setrightChecked = () => {
        this.setState({
            rightChecked: !this.state.rightChecked,
            leftChecked: false,
            playChecked: false,
        })
    }
    componentDidMount(){}
    render() {
        const { leftChecked, playChecked, rightChecked } = this.state

        let url ='http://m7.music.126.net/20200711112326/3b25e5eb6aefd0a71a929fc67c25676c/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/3142653095/f081/5df2/ba73/04f7fbc83e0dd515eb020a151444cc6c.mp3'
        return <div className={cssobj.Hidewindow}>
            <div className={cssobj.trandiv}></div>
            <div className={cssobj.showwindow}  >
                <LeftCircleOutlined style={{ color: leftChecked ? 'white' : '' }} className={cssobj.left} />
                {/* <PlayCircleOutlined style={{ color: audio.played ? 'white' : '' }} onClick={()=>audio.play()} className={cssobj.musicplay} /> */}
                <RightCircleOutlined style={{ color: rightChecked ? 'white' : '' }} className={cssobj.right} />
                <PauseCircleOutlined />
                <audio id='audio' src={url} loop>歌曲</audio>
                {/* <i className='font'></i> */}
            </div>

        </div>
    }

}   