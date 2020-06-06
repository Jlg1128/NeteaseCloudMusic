import React,{Component} from 'react'
import cssobj from '../publiccom/public.less'
import '../publiccom/public.less'
import {UpOutlined} from '@ant-design/icons'

export default class fixnav extends Component{
    constructor(){
        super()
        this.state={
            scrollTop:-1,
        }
    }
    getscroll=(e)=>{

    }
    componentDidMount() {
        // 挂载滚动监听
        window.addEventListener('scroll', this.bindScroll)
    }
    componentWillUnmount() {
        // 移除滚动监听
        window.removeEventListener('scroll', this.bindScroll);
    }
    bindScroll=(event)=>{
        // 滚动的高度
        const scrollTop = (event.srcElement ? event.srcElement.documentElement.scrollTop : false) || window.pageYOffset || (event.srcElement ? event.srcElement.body.scrollTop : 0);
        // 视窗高度
        const clientHeight = (event.srcElement && event.srcElement.documentElement.clientHeight) || document.body.clientHeight;
        // 页面高度
        const scrollHeight = (event.srcElement && event.srcElement.documentElement.scrollHeight) || document.body.scrollHeight;
        // 距离页面底部的高度
        const height = scrollHeight - scrollTop - clientHeight;

        if(scrollTop>20){
            this.setState({scrollTop:scrollTop})
        }else{
            this.setState({scrollTop:-1})
        }
    }
    scrollTotop=(e)=>{
        window.scrollTo(0,0)
    }
    render(){
        const {scrollTop} = this.state
        return <div onClick={this.scrollTotop}  style={{display:(scrollTop>20)?'block':'none'}} className={cssobj.fixnav_wrap}>
                <UpOutlined />
                <h4>Top</h4>

               </div>
    }
}