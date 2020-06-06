import React,{Component} from 'react'
import cssobj from './index.less'
import './index.less'
import {HeartOutlined,RightOutlined,LeftOutlined,PlayCircleOutlined,FolderAddOutlined,SketchOutlined} from '@ant-design/icons'
import {Button} from 'antd'
import Alert from './alert'
export default class Recommend extends Component{
    constructor(){
        super()
        this.state={
            hotreco:[{
                src:'/static/logo.jpg',
                des:"专属电影院的私人时光"
            },{
                src:'/static/logo.jpg',
                des:"专属电影院的私人时光"
            },
            {
                src:'/static/logo.jpg',
                des:"专属电影院的私人时光"
            },
            {
                src:'/static/logo.jpg',
                des:"专属电影院的私人时光"
            },
            {
                src:'/static/logo.jpg',
                des:"专属电影院的私人时光"
            },
            {
                src:'/static/logo.jpg',
                des:"专属电影院的私人时光"
            },
            {
                src:'/static/logo.jpg',
                des:"专属电影院的私人时光"
            },
            {
                src:'/static/logo.jpg',
                des:"专属电影院的私人时光"
            },]
            ,newestmusic:[
                {
                    src:'/static/logo.jpg',
                    des:"晴天",
                    singer:'张惠妹'
                },
                {
                    src:'/static/logo.jpg',
                    des:"彩虹",
                    singer:'周杰伦'
                },
                {
                    src:'/static/logo.jpg',
                    des:"火力全开",
                    singer:'王力宏'
                },
                {
                    src:'/static/logo.jpg',
                    des:"演员",
                    singer:'薛之谦'
                },
                {
                    src:'/static/logo.jpg',
                    des:"演员",
                    singer:'薛之谦'
                },
                {
                    src:'/static/logo.jpg',
                    des:"演员",
                    singer:'薛之谦'
                },
                
            ],
            ranklisthot:[
                {
                   src:'',
                   musicname:"遇到"
                },
                {
                    src:'',
                    musicname:"追光者"
                 },
                 {
                    src:'',
                    musicname:"下雨天"
                 },
                 {
                    src:'',
                    musicname:"我们的纪念"
                 },
                 {
                    src:'',
                    musicname:"夏天的颜色"
                 },
                 {
                    src:'',
                    musicname:"愚爱"
                 },
                 {
                    src:'',
                    musicname:"斗兽场"
                 },
                 {
                    src:'',
                    musicname:"哥伦比亚"
                 },
                 {
                    src:'',
                    musicname:"花样年华"
                 },
                 {
                    src:'',
                    musicname:"还是分开"
                 }
            ],
            musiclistindex:-1,
            musicinfo:[],
            joinedsinger:[]
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.props.dispatch({
                type:"recommend/Asyncgetmusicinfo"
            })
        },1000)
}
setVisible = ()=>{
    this.props.dispatch({type:"recommend/setVisible",payload:true})
}
    render(){
        const {joinedsinger,musicinfo} = this.props
        const {hotreco,newestmusic,musiclistindex} = this.state
        const joinedsingerfun = ()=>{  if(joinedsinger==undefined){
            return <h1>loading...</h1>
             }else{
          return joinedsinger.map((item,index)=> <div key={index} className={cssobj.zhubolist}><div><img src={item.src} alt=""/></div>
          <a href=""><h3>{item.singer}<SketchOutlined style={{color:"red"}} /></h3> </a> 
           <p>{item.des}</p>
        </div>)
               }}
        const musicinfofun = ()=>{
            if(musicinfo!=undefined){
               return musicinfo.map((item,index)=><li key={index} onMouseOut={()=>{this.setState({musiclistindex:-1})}} onMouseOver={()=>{this.setState({musiclistindex:index+20})}}>
            <i className={cssobj.i}  style={{color:(index>2)?'':'red'}}>{index+1}</i>
            <a href="">{item.musicname}</a>
           <a href=""><PlayCircleOutlined alt='123' title='嘻嘻' style={{display:(musiclistindex===index+20?'block':'none')}} className={cssobj.play2} /></a> 
           <a href=""><FolderAddOutlined  alt='添加' style={{display:(musiclistindex===index+20?'block':'none')}} className={cssobj.add2} /></a> 
           </li>   
               )}else{
                   return <span className={cssobj.loading}><h1>loading...</h1></span>
               }
        }
        return <div className={`${cssobj.reco_wrap} ${cssobj. clearfix}`}>
 
                  <div className={cssobj.reco_main}>
                      <div className={cssobj.reco_musiclist}>
                          <div className={`${cssobj.musiclist_main} ${cssobj. clearfix}`}>
                              <ul className={cssobj.musiclist_nav}>
                                  <li><a href=""><h3><HeartOutlined/>热门推荐</h3></a></li>
                                  <li><a href=""><h5>华语</h5></a></li>
                                  <li>|</li>
                                  <li><a href=""><h5>流行</h5></a></li>
                                  <li>|</li>
                                  <li><a href=""><h5>摇滚</h5></a></li>
                                  <li>|</li>
                                  <li><a href=""><h5>民谣</h5></a></li>
                                  <li>|</li>
                                  <li><a href=""><h5>电子</h5></a></li>
                                  <li style={{float:'right',marginRight:10}}><a href=""><h5>更多<RightOutlined/></h5></a></li>
                              </ul> 
                              <ul className={cssobj.musci_link_wrap}>
                                  {hotreco.map((item,index)=><li key={index} className={cssobj.musci_link}>
                                    <a key={index} href=""><div><img src={item.src} alt=""/></div></a>
                                    <a href=""><h3>{item.des}</h3></a>
                                  </li>)}
                              </ul>
                    </div>
                          <div className={`${cssobj.musiclist_main} ${cssobj. clearfix}`}>

                       <ul className={cssobj.musiclist_nav}>
                         <li><a href=""><h3><HeartOutlined/>新碟上架</h3></a></li>
                       </ul> 
                         <div className={cssobj.musci_link_wrap2}>
                             <a href=""><LeftOutlined className='arrow lf' /></a>
                             <a href=""><RightOutlined className='arrow ri' /></a>
                              <ul>
                                  {newestmusic.map((item,index)=><li key={index}>
                                      <a href=""><div><img src={item.src} alt=""/></div></a>
                                      <a href=""><h3>{item.des}</h3></a>
                                      <a href=""><h3>{item.singer}</h3></a>
                                  </li>)}

                              </ul>
                             </div>
                    </div>  
                          <div className={`${cssobj.musiclist_main} ${cssobj. clearfix}`}>
                       <ul className={cssobj.musiclist_nav}>
                         <li><a href=""><h3><HeartOutlined/>榜单</h3></a></li>
                       </ul> 
                       <div className={cssobj.rankilst}>
                           <ul>
                               <li className={cssobj.rankilst_head}>
                                   <a href=""><div  style={{backgroundColor:'#84abe4'}}>飙升榜</div></a>
                                   <h3>云音乐飙升榜</h3>
                                   <PlayCircleOutlined className={cssobj.play} />
                                   <FolderAddOutlined className={cssobj.add}/>
                               </li>
                               {musicinfofun()} 
                           </ul>
                           <ul>
                           <li className={cssobj.rankilst_head}>
                                   <a href=""><div style={{backgroundColor:'#7ac9ce'}}>新歌榜</div></a>
                                   <h3>云音乐新歌榜</h3>
                                   <PlayCircleOutlined className={cssobj.play} />
                                   <FolderAddOutlined className={cssobj.add}/>
                               </li>
                               {musicinfofun()}                                
                           </ul>
                           <ul>
                           <li className={cssobj.rankilst_head}>
                                   <a href=""><div style={{backgroundColor:'#d77792'}}>歌曲榜</div></a>
                                   <h3>网易原创歌曲榜</h3>
                                   <PlayCircleOutlined className={cssobj.play} />
                                   <FolderAddOutlined className={cssobj.add}/>
                               </li>
                               {musicinfofun()} 
                           </ul>
                       </div>   
                    </div>                      
                      </div>
                       <div className={cssobj.reco_singerlist}>
                          <div className={cssobj.singerlist_main}>
                              <p>登录网易云音乐，可以享受无线收藏的乐趣，并且无线同步手机</p>
                              <Button type="primary" onClick={this.setVisible} danger>用户登录</Button>
                          </div>
                          <div className={cssobj.singerinfo_wrap}>
                              <div className={cssobj.joined_singer}>
                                  <h3>入住歌手</h3>
                                  <a href="">
                                      <i>查看全部</i>
                                      <RightOutlined/>
                                  </a>
                              </div>
                              {joinedsingerfun()}
                              <Button className={cssobj.join_btn}>申请成为合伙人</Button>
                              <div className={cssobj.joined_singer}>
                                  <h3>热门主播</h3>
                              </div>
                              {joinedsingerfun()}
                          </div>
                      </div>
                  </div>

              </div>
    }
}