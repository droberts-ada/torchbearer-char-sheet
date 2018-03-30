import React from 'react';
import { connect } from 'react-redux';
import { Tabs } from './actions';
import './App.css';

import TabRowContainer from './containers/TabRowContainer';
import StatsPageContainer from './containers/StatsPageContainer';
import InfoPageContainer from './containers/InfoPageContainer';

const mapStateToProps = (state) => {
  return {
    currentTab: state.currentTab
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

const App = ({ currentTab }) => {
  let page = null;
  switch(currentTab) {
    case Tabs.STATS:
    page = (<StatsPageContainer />);
    break;

    case Tabs.INFO:
    page = (<InfoPageContainer />);
    break;

    default:
    break;
  }

  return (
    <div>
      <TabRowContainer />
      <main>
        {page}
      </main>
    </div>
  );
};

// Is this bad? A little. This component is basically just
// a dispatcher, not complex enough to justify two files.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
