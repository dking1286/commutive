import React from 'react';
import ReactDOM from 'react-dom';

import ProfilePage from './components/profile-page/profile-page.jsx'

const PAGES = ['profile', 'display'];

class App extends React.Component {
  constructor() {
    super();
    this.state = {currentPage: 'profile'};
  }

  changePage(pageName) {
    if (!PAGES.include(pageName)) {
      throw new Error(`${pageName} is not a valid page`);
    }

    this.setState({currentPage: pageName});
  }

  render() {
    return (
      <ProfilePage />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('content'));
