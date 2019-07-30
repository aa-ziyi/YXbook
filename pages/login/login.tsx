import React from 'react';
import { InputItem, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import { createForm } from 'rc-form';
import instance from '../../utils/axios';

interface Props {
  form: any;
}

class BasicInputExample extends React.Component<Props> {
  handleLogin() {
    console.log('click');
    this.props.form.validateFields((error, value) => {
      console.log(error, value);
      if (!error) {
        instance({
          url: '/user',
          method: 'post',
          data: { id: 1 }
        });
      }
    });
  }
  render() {
    const { getFieldProps, getFieldError } = this.props.form;
    return (
      <div>
        <InputItem
          {...getFieldProps('name', {
            rules: [{ required: true }]
          })}
          clear
          placeholder="请输入用户名"
          error={getFieldError('name') || [].length}
        >
          用户名
        </InputItem>
        <InputItem
          {...getFieldProps('password', {
            rules: [{ required: true, message: '请输入密码' }]
          })}
          clear
          placeholder="请输入密码"
          error={getFieldError('password') || [].length}
        >
          密码
        </InputItem>
        <WhiteSpace />
        <WingBlank>
          <Button
            type="primary"
            onClick={() => {
              this.handleLogin();
            }}
          >
            登陆
          </Button>
        </WingBlank>
      </div>
    );
  }
}

export default createForm()(BasicInputExample);
