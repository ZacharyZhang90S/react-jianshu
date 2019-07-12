import React, {Component} from 'react';
import { connect } from 'react-redux';
import Topic from './component/Topic';
import List from './component/List';
import Recommend from './component/Recommend';
import Writer from './component/Writer';
import axios from 'axios';

import {
  HomeLeft,
  HomeRight,
  HomeWrapper,
} from './style';

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img' alt='banner-img'
               src="https://upload.jianshu.io/admin_banners/web_images/4679/5570c9de5caff87a2ae4509d2b61d936fa974816.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
          <Topic/>
          <List/>
        </HomeLeft>
        <HomeRight>
          <Recommend/>
          <Writer/>
        </HomeRight>
      </HomeWrapper>
    );
  }

  componentDidMount() {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data;
      const action = {
        type: 'change_home_data',
        topicList: result.topicList,
        articleList: result.articleList,
        recommendList: result.recommendList,
      };
      this.props.changeHomeData(action);
    });
  }
}

const mapDispatch = (dispatch) => ({
  changeHomeData(action) {
    dispatch(action);

  },
});

export default connect(null, mapDispatch)(Home);