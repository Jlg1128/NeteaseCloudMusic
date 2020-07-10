import React, { Component } from 'react'
import Alert from '../../common/alert/alert'
import {Input,Button,Modal,Space } from 'antd'
import cssobj from './comment.less'

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
    const url = 'http://p1.music.126.net/ma8NC_MpYqC-dK_L81FWXQ==/109951163250233892.jpg'
    const user = { author: 'jlg', avatar: url, content: "我是真的帅" }
    const comment = [{ author: 'jlg', avatar: url, content: "我是真的帅" }, { author: '何帆', avatar: url, content: "你是盒饭吗，你真的好好看呢哈哈哈" }]
    return (
      <div className={`${cssobj.specialcommment} ${cssobj.clearfix}`}>
          <div className={cssobj.comment_ul}>
            <div className={cssobj.comment_avatar}>
              <img style={{ width: 50, height: 50 }} src={url} alt="" />
            </div>
            <span className={cssobj.comment_username}>
              <a style={{ color: 'blue' }} href="">临深时见鹿</a>&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;
                   :asldsakldsakld
               </span>
            <i>昨天10:15</i>
            <span className={cssobj.reply}>
              <img style={{ width: 22, height: 22 }} src="/static/点赞.png" alt="" />
              <a href="">(245)</a>&nbsp;&nbsp;&nbsp;
                 <a href="javascript:void(0)" onClick={this.setVisible}>回复</a>
            </span>
           </div> 
           <div style={{display:visible?'block':'none'}} className={cssobj.addcomment_wrap}>
             <TextArea defaultValue={'@小鲸鱼：'} rows={1} className={cssobj.TextArea}/>
             <Button loading={loading} onClick={this.setloading} className={cssobj.submitbtn}>提交</Button>
             {isalert?this.info():''}
           </div>
      </div>
    )
  }
}