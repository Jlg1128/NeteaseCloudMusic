import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import Alert from '../../common/alert/alert'

const { TextArea } = Input;



const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <div>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
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
    if (!this.state.value) {
      return;
    }

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
    const {user} = this.props
    console.log( this.props);
    
    return (
        <div>
          <Alert visible={visible} />
        <Comment
          avatar={
            <Avatar
              src={user.avatar}
              alt={user.name}
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
