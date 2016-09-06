import React from 'react';
import ReactDOM from 'react-dom';

import ProfilePage from './components/profile-page/profile-page.jsx'
import DisplayPage from './components/display-page/display-page.jsx'

const PAGES = ['profile', 'display'];

class App extends React.Component {
  constructor() {
    super();
    this.state = {currentPage: 'display'};
  }

  changePage(pageName) {
    if (!PAGES.include(pageName)) {
      throw new Error(`${pageName} is not a valid page`);
    }

    this.setState({currentPage: pageName});
  }

  render() {
    if (this.state.currentPage === 'display') {
      return (
        <DisplayPage />
      );
    }

    if (this.state.currentPage === 'profile') {
      return (
        <ProfilePage />
      );
    }

    throw new Error('this.state.page is not valid');
  }
}

ReactDOM.render(<App />, document.getElementById('content'));
