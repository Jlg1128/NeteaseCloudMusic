import React, { Component } from 'react'
import Alert from '../../common/alert/alert'
import {Input,Button,Modal,Space } from 'antd'
import cssobj from './comment.less'
import formatDate from '../../../util/timechange'
const { TextArea } = Input;

export default class CommentItem extends Component {
  state = {
    visible: false,
    loading:false,
    isalert:false,
    inputvalue:'',
    content:""
  }
  setVisible = () => {
    this.setState({
      visible: !this.state.visible,
    })

  }
  //点击评论按钮
  setloading = ()=>{
    if(!this.state.inputvalue){
      return ;
    }
    if(!this.props.logstatus){
      this.props.handelSubmitComment(true)
      return ;
    }
    this.props.dispatch({
      type:'songabout/replyAsync',
      payload:{
        targetid:this.props.comment.user.userId,
        musicid:this.props.musicid, 
        content:this.state.inputvalue,
        id :this.props.userid,
        time:this.props.comment.time
      }
    })
    this.setState({
        content:"评论成功",
        isalert:true,
        loading:true,
    })

    setTimeout(() => {
      this.setState({
        visible: !this.state.visible,
        loading:false,

      })
   }, 1500);
  }

//点赞
clicklike = ()=>{
    this.setState({
      content:"点赞成功",
      isalert:true
    })
    this.props.dispatch({
      type:"songabout/clicklikeAsync",
      payload:{
        targetid:this.props.comment.user.userId,
        musicid:this.props.musicid, 
        content:this.state.inputvalue,
        id :this.props.userid,
        time:this.props.comment.user.time
      }
    })
    setTimeout(() => {
        this.setState({
          isalert:false
        })
    }, 500);
}
  handleinput = (e)=>{
    let value = e.currentTarget.value
    let index = value.indexOf(':')+1
      value = value.slice(index)
    this.setState({
      inputvalue:value
    })
  }
   
  render() {
    const {isalert,visible,loading,content} = this.state
    // const url = 'http://p1.music.126.net/ma8NC_MpYqC-dK_L81FWXQ==/109951163250233892.jpg'
    const {comment} = this.props
    let timedata = formatDate(comment.time)
    return (
      <div className={`${cssobj.specialcommment} ${cssobj.clearfix}`}>
          <div className={cssobj.comment_ul}>
            <div className={cssobj.comment_avatar}>
              <img style={{ width: 50, height: 50 }} src={comment.user.avatarUrl} alt="" />
            </div>
            <span className={cssobj.comment_username}>
              <a style={{ color: 'blue' }} href="">{comment.user.nickname}</a>&nbsp;:&nbsp;{comment.content}
               </span>
            <i>{timedata}</i>
            <span className={cssobj.reply}>
              <img onClick={this.clicklike} style={{ width: 22, height: 22,cursor:'pointer' }} src="/static/点赞.png" alt="" />
              <a href="">({comment.likedCount})</a>&nbsp;&nbsp;&nbsp;
                 <a href="javascript:void(0)" onClick={this.setVisible}>回复</a>
            </span>
           </div> 
           <div style={{display:visible?'block':'none'}} className={cssobj.addcomment_wrap}>
             <Alert visible={isalert} content={this.state.content} />
             <TextArea defaultValue={`${comment.user.nickname}:`}  onChange={ this.handleinput} rows={1} className={cssobj.TextArea}/>
             <Button loading={loading} onClick={this.setloading} className={cssobj.submitbtn}>提交</Button>
           </div>
      </div>
    )
  }
}