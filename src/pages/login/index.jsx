import React, {Component} from 'react';
import {LoginWrapper, LoginBox, Input, Button} from './style';
// import {connect} from 'react-redux';
// import {actionCreators} from './store';

class Login extends Component {
  render() {
    return (
      <LoginWrapper>
        <LoginBox>
          <Input placeholder='账号'/>
          <Input placeholder='密码'/>
          <Button>登录</Button>
        </LoginBox>
      </LoginWrapper>
    );
  }
}

// const mapState = (state) => ({
// });
// const mapDispatch = (dispatch) => ({
// });
// export default connect(mapState, mapDispatch)(Login);
export default Login;
