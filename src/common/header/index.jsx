import React from 'react';
import {connect} from 'react-redux';
import {CSSTransition} from 'react-transition-group';
import { actionCreators } from './store';
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
          {/*eslint react/prop-types: 0 */}
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
    focused: state.header.get('focused'),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.searchFocus(),
      );
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);

