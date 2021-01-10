import React from 'react';
import { Input, Button } from 'antd';

const { TextArea } = Input;

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
  const visible = props.visible ? props.visible : false;
  return (
    <div style={{ display: visible ? 'block' : 'none' }}>
      <TextArea rows={2} defaultValue="@我是小番茄：" />
      <Button style={{ float: 'right', marginRight: 50 }} type="primary">
        评论
      </Button>
    </div>
  );
};
