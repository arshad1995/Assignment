import { connect } from 'react-redux';
import Home from '../components/Home';

import { getNewsList } from '../actions/home.actions';

const mapStateToProps = state => {
  return {
    news: state.news.news,
    loading: state.news.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getNewsList: channel_id => dispatch(getNewsList(channel_id)),
  };
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default Container;
