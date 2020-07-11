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
    isalert:false
  }
  setloading = ()=>{
    this.setState({
      loading:true
    })
    setTimeout(() => {
      this.setState({
        visible: !this.state.visible,
        loading:false,
        isalert:true
      })
      setTimeout(() => {
        this.setState({
          isalert:false
        })
      }, 500);
   }, 1500);
  }
  setVisible = () => {
    this.setState({
      visible: !this.state.visible,
    })

  }
 info = () => {
    Modal.info({
      content: (
        <div>评论成功</div>
      ),


    });
  }
  render() {
    const {isalert,visible,loading} = this.state
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
              <img style={{ width: 22, height: 22,cursor:'pointer' }} src="/static/点赞.png" alt="" />
              <a href="">({comment.likedCount})</a>&nbsp;&nbsp;&nbsp;
                 <a href="javascript:void(0)" onClick={this.setVisible}>回复</a>
            </span>
           </div> 
           <div style={{display:visible?'block':'none'}} className={cssobj.addcomment_wrap}>
             <TextArea defaultValue={`@${comment.user.nickname}:`} rows={1} className={cssobj.TextArea}/>
             <Button loading={loading} onClick={this.setloading} className={cssobj.submitbtn}>提交</Button>
             {isalert?this.info():''}
           </div>
      </div>
    )
  }
}