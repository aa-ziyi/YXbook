import React from 'react';
import { InputItem, Button } from 'antd-mobile';
import { createForm } from 'rc-form';

interface Props {
  form: any;
}

class BasicInputExample extends React.Component<Props> {
  handleLogin() {
    console.log('click');
  }
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <InputItem
          {...getFieldProps('autofocus')}
          clear
          placeholder="auto focus"
        >
          用户名
        </InputItem>
        <InputItem
          {...getFieldProps('focus')}
          clear
          placeholder="click the button below to focus"
        >
          密码
        </InputItem>
        <Button
          type="primary"
          onClick={() => {
            this.handleLogin();
          }}
        >
          primary
        </Button>
      </div>
    );
  }
}

export default createForm()(BasicInputExample);
