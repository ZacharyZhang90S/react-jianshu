import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;
export const Logo = styled.a.attrs({
  href: '/',
})`
  position: absolute;
  top:0;
  display: block;
  width: 100px;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  background: url(${logoPic});
  background-size: contain;
`;
export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  background: green;
`;
export const NavItem = styled.div`
  &.left {
    float: left;
  }
  &.right {
    float: right; 
  }
`;
