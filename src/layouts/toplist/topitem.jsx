import React,{Component} from 'react'
import cssobj from './toplist.less'
import './toplist.less'
import Topitemshow from './topitemshow'


import {Link} from 'umi'
import { Breadcrumb } from 'antd';
export default class TopItem extends Component{
    state={ranklist:[{
        id:123,
        span:'飙升榜',
        h4:'云音乐飙升榜',
        p:'每天更新',
        bgc:'green'
    },{
        id:6512,
        span:'新歌榜',
        h4:'云音乐新歌榜',
        p:'每天更新',
        bgc:'blue'
    },{
        id:32132,
        span:'原创榜',
        h4:'网易原创歌曲榜',
        p:'每天更新',
        bgc:'yellow'
    },{
        id:31318,
        span:'热歌榜',
        h4:'云音乐热歌榜',
        p:'每天更新',
        bgc:'red'
    }],clickIndex:this.props.clickIndex,toplist:this.props.toplist}
    componentDidMount(){

        this.props.dispatch({type:'toplistinfo/getranklist',payload:this.state.ranklist[0]})

    }

    render(){

       const bread =  <Breadcrumb>

       <Breadcrumb.Item>
         <Link to='/'>Home</Link>
       </Breadcrumb.Item>
       <Breadcrumb.Item>
         <Link to='/discover'>discover</Link>
       </Breadcrumb.Item>
       <Breadcrumb.Item>Toplist</Breadcrumb.Item>
     </Breadcrumb>
        const {clickIndex,ranklist,toplist} = this.state

        const cloudTese = this.state.ranklist?( this.state.ranklist.map((item,index)=><li onClick={()=>{this.setState({clickIndex:index});this.props.dispatch({type:'toplistinfo/getToplistAsync',
        }),this.props.dispatch({type:'toplistinfo/getranklist',payload:item})}} style={{backgroundColor:clickIndex===index?'#ccc':'#f9f9f9'}} key={index}>
        <Link to={`/discover/toplist/${item.id}`}> <div>
              <span style={{backgroundColor:item.bgc}}>{item.span}</span>
              <h4>{item.h4}</h4>
              <p>{item.p}</p>
        </div>
        </Link>
       </li>) ):( <li><h1>Loading...</h1></li>)
        return <div className={`${cssobj.Toplist_bgc} ${cssobj.clearfix}`}>
            {bread}
            <Fun /> 
                <div className={cssobj.Toplist_wrap}>
                  <div className={cssobj.Toplist_item}>
                      <div className={cssobj.tese}>
                          <h2 className={cssobj.toplist_h2}>云音乐特色榜</h2>
                          <ul className={cssobj.toplist_ul}>
                            {cloudTese}
                          </ul>
                      </div>
                  </div>
              

                </div>
               </div>
    }
}