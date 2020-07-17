import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import Cookies from 'js-cookie'
import Alert from '../../common/alert/alert'


const { TextArea } = Input;



const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <div>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button style={{marginRight:50}} htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        评论
      </Button>
    </Form.Item>
    </div>
);

export default class Addcomment extends React.Component {
  state = {
    submitting: false,
    value: '',
    visible:false
  };

  handleSubmit = () => {
    if (!this.state.value ) {
      return;
    }
    if(!this.props.logstatus){
      this.props.handelSubmitComment(true)
      return ;
    }
    this.props.dispatch({
      type:'songabout/submitCommentAsync',
      payload:{
        id: this.props.musicid,
        content:this.state.value,
        commentId:this.props.userid
      }
    })
    this.setState({
      submitting: true,
    });
    setTimeout(() => {
      this.setState({
        submitting: false,
        value: '',
        visible:true
      });
      setTimeout(() => {
        this.setState({
          visible:false
        });
      }, 1500);
    }, 1000);
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {

    const {  submitting, value,visible } = this.state;
    const {avatar,username} = this.props
    return (
        <div>
          <Alert visible={visible} content={'评论成功'}/>
        <Comment
          avatar={
            <Avatar
              src={avatar}
              alt={username}
            />
          }
          content={
            <Editor
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              submitting={submitting}
              value={value}
            />
          }
        />
      </div>
    );
  }
}
