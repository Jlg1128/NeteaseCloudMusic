import React from 'react'
import Nav from '../layouts/publiccom/nav'
import Head_nav from '../layouts/publiccom/head_nav'
import Swiper from '../layouts/index/swiper'
import Recommend from '../layouts/index/recommend'
import Foot from '../layouts/publiccom/foot'
import Fixnav from '../layouts/publiccom/fixnav'
import Hidewindow from '../layouts/index/hidewindow'
import Modal from '../layouts/index/modal'
import {connect} from 'umi'

class Index extends React.Component{
    componentDidMount(){
        this.props.dispatch({
            type:"toplistinfo/getClickindex",
            payload:0
        })
    }
    render(){

        const {visible} = this.props.music.recommend
        const joinedsinger = this.props.music.recommend.joinedsinger[0]

        const musicinfo = this.props.music.recommend.musicinfo[0]

        const {dispatch} = this.props
        const Modaler = this.props.music.recommend.visible?(<Modal dispatch={dispatch} />):null
        return <div>
        <Nav />
        <Head_nav  clickIndex={0}/>
        <Swiper/>
        <Recommend joinedsinger={joinedsinger} musicinfo={musicinfo} dispatch={dispatch} />
        <Foot/>
        <Fixnav/>
        <Hidewindow />
        {Modaler}
        </div>
    }
}
function mapStateToProps(state){

    return {music:state}
}
export default connect(mapStateToProps)(Index)