import React,{Component} from 'react'
import cssobj from './public.less'
import './public.less'
import {Link} from 'umi'
import {connect} from 'umi'

class Head_nav extends Component{
    constructor(props){
        super(props)
        this.state={clickIndex:props.clickIndex}
    }
    setIndex=(e)=>{
        const {index} =  e.currentTarget.dataset 
        const newindex = parseInt(index)

        this.props.dispatch({
            type:"recommend/getindex",
            payload:newindex
        })
    }

    render(){
        const clickIndex = this.props.currentindex.recommend.currentindex?this.props.currentindex.recommend.currentindex:this.state.clickIndex
        return <div> <div className={cssobj.haed_nav}>
             <ul className={cssobj.haed_nav_ul}>
                 <li><Link onClick={this.setIndex} data-index={0}  to='/discover' className={cssobj.haed_nav_link} style={{backgroundColor:(clickIndex===0)?'#242424':''}} >推荐</Link></li>
                 <li><Link onClick={this.setIndex} data-index={1}  to='/discover/toplist' className={cssobj.haed_nav_link} style={{backgroundColor:(clickIndex===1)?'#242424':''}}>排行榜</Link></li>
                 <li><Link onClick={this.setIndex} data-index={2}  to='/discover/playlist' className={cssobj.haed_nav_link} style={{backgroundColor:(clickIndex===2)?'#242424':''}} >歌单</Link></li>
                 <li><Link onClick={this.setIndex} data-index={3}  to='discover/djradio' className={cssobj.haed_nav_link} style={{backgroundColor:(clickIndex===3)?'#242424':''}} >主播电台</Link></li>
                 <li><Link onClick={this.setIndex} data-index={4}  to='discover/artist' className={cssobj.haed_nav_link} style={{backgroundColor:(clickIndex===4)?'#242424':''}} >歌手</Link></li>
                 <li><Link onClick={this.setIndex} data-index={5}  to='/discover/album' className={cssobj.haed_nav_link}  style={{backgroundColor:(clickIndex===5)?'#242424':''}} >新碟上架</Link></li>
             </ul>
        </div>
        <div className={cssobj.div2}></div>
        </div>
    }
}
function mapStateToProps(state){
    return {currentindex:state}
}
export default connect(mapStateToProps)(Head_nav)