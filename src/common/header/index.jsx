import React from 'react';
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  // SearchInfo,
  // SearchInfoTitle,
  // SearchInfoSwitch,
  // SearchInfoList,
  // SearchInfoItem,
  Addition,
  Button,
} from './style';


const Header = (props) => {
  return (
    <HeaderWrapper>
      <Logo/>
      <Nav>
        <NavItem className='left'> 首页</NavItem>
        <NavItem className='left'>下载App</NavItem>
        <NavItem className='right'>登录</NavItem>
        <NavItem className='right'>
          <i className='iconfont'>&#xe636;</i>
        </NavItem>
        <SearchWrapper>
          <CSSTransition
            in={props.focused}
            timeout={200}
            classNames='slide'
          >
            <NavSearch
              className={props.focused ? 'focused' : null}
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}
            />
          </CSSTransition>
          <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe614;</i>
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className='writting'>
          <i className='iconfont'>
            &#xe615;
          </i>
        </Button>
      </Addition>
    </HeaderWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    focused: state.focused,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      const action = {
        type: 'search_focus',
      };
      dispatch(action);
    },
    handleInputBlur() {
      const action = {
        type: 'search_blur',
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);

