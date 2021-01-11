import React, { Component } from 'react';
import { Input, Button } from 'antd';
import Alert from '../../common/alert/alert';
import cssobj from './comment.less';
import formatDate from '../../../util/timechange';

const { TextArea } = Input;

export default class CommentItem extends Component {
  state = {
    visible: false,
    loading: false,
    isalert: false,
    inputvalue: '',
    content: '',
  };

  setVisible = e => {
    e.preventDefault();
    this.setState({
      // eslint-disable-next-line react/no-access-state-in-setstate
      visible: !this.state.visible,
    });
  };

  // 点击评论按钮
  setloading = () => {
    if (!this.state.inputvalue) {
      return;
    }
    if (!this.props.logstatus) {
      this.props.handelSubmitComment(true);
      return;
    }
    this.props.dispatch({
      type: 'songabout/replyAsync',
      payload: {
        targetid: this.props.comment.user.userId,
        musicid: this.props.musicid,
        content: this.state.inputvalue,
        id: this.props.userid,
        time: this.props.comment.time,
      },
    });
    this.setState({
      content: '评论成功',
      isalert: true,
      loading: true,
    });

    setTimeout(() => {
      this.setState({
        // eslint-disable-next-line react/no-access-state-in-setstate
        visible: !this.state.visible,
        loading: false,
      });
    }, 1500);
  };

  // 点赞
  clicklike = () => {
    this.setState({
      content: '点赞成功',
      isalert: true,
    });
    this.props.dispatch({
      type: 'songabout/clicklikeAsync',
      payload: {
        targetid: this.props.comment.user.userId,
        musicid: this.props.musicid,
        content: this.state.inputvalue,
        id: this.props.userid,
        time: this.props.comment.user.time,
      },
    });
    setTimeout(() => {
      this.setState({
        isalert: false,
      });
    }, 500);
  };

  handleinput = e => {
    let { value } = e.currentTarget;
    const index = value.indexOf(':') + 1;
    value = value.slice(index);
    this.setState({
      inputvalue: value,
    });
  };

  render() {
    const { isalert, visible, loading, content } = this.state;
    // const url = 'http://p1.music.126.net/ma8NC_MpYqC-dK_L81FWXQ==/109951163250233892.jpg'
    const { comment } = this.props;
    const timedata = formatDate(comment.time);
    return (
      <div className={`${cssobj.specialcommment} ${cssobj.clearfix}`}>
        <div className={cssobj.comment_ul}>
          <div className={cssobj.comment_avatar}>
            <img
              style={{ width: 50, height: 50 }}
              src={`${comment.user.avatarUrl}?param=50y50`}
              alt=""
            />
          </div>
          <span className={cssobj.comment_username}>
            <a style={{ color: '#0c73c2' }} href="">
              {comment.user.nickname}
            </a>
            &nbsp;:&nbsp;
            {comment.content}
          </span>
          <i>{timedata}</i>
          <span className={cssobj.reply}>
            <img
              onClick={this.clicklike}
              src="/static/点赞.png"
              alt=""
            />
            <a href="">{comment.likedCount}</a>
            &nbsp;&nbsp;&nbsp;
            <a href="" onClick={this.setVisible}>
              回复
            </a>
          </span>
        </div>
        <div
          style={{ display: visible ? 'block' : 'none' }}
          className={cssobj.addcomment_wrap}
        >
          <Alert visible={isalert} content={this.state.content} />
          <TextArea
            defaultValue={`${comment.user.nickname}:`}
            onChange={this.handleinput}
            rows={1}
            className={cssobj.TextArea}
          />
          <Button
            loading={loading}
            onClick={this.setloading}
            className={cssobj.submitbtn}
          >
            提交
          </Button>
        </div>
      </div>
    );
  }
}
