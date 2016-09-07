import React from 'react';
import ReactDOM from 'react-dom';

import ProfilePage from './components/profile-page/profile-page.jsx';
import DisplayPage from './components/display-page/display-page.jsx';
import LoginPage from './components/login-page/login-page.jsx';
import SignupPage from './components/signup-page/signup-page.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPage: 'login',
      navbarVisible: false,
      userData: null
    };
  }

  changePage(options) {
    const {pageName, navbarVisible, userData} = options;

    this.setState({currentPage: pageName, navbarVisible, userData});
  }

  render() {
    let pageDisplay, navbarDisplay;

    if (this.state.navbarVisible) {
      navbarDisplay = (
        <nav>
          <p
          className='navbar-link'
          id='display-page-link'
          onClick={this.changePage.bind(this, 'display')}
          >
          Display page
          </p>

          <p
          className='navbar-link'
          id='profile-page-link'
          onClick={this.changePage.bind(this, 'profile')}
          >
          Profile page
          </p>
        </nav>
      );
    }

    switch (this.state.currentPage) {
      case 'login':
        pageDisplay = (
          <LoginPage
          changePage={this.changePage.bind(this)}
          />
        );
        break;

      case 'signup':
        pageDisplay = (
          <SignupPage
          changePage={this.changePage.bind(this)}
          />
        );
        break;

      case 'profile':
        pageDisplay = (
          <ProfilePage
          userData={getData()}
          changePage={this.changePage.bind(this)}
          />
        );
        break;

      case 'display':
        pageDisplay = (
          <DisplayPage userData={getData()} />
        );
        break;

      default:
        throw new Error('this.state.page is not valid');
    }

    return (
      <div className='app'>
        {navbarDisplay}
        {pageDisplay}
      </div>
    )
  }
}


function getData() {
  const commuteTime = localStorage.getItem('commuteTime');
  const commuteDistance = localStorage.getItem('commuteDistance');
  const hourlyPay = localStorage.getItem('hourlyPay');

  return {commuteTime, commuteDistance, hourlyPay};
}



ReactDOM.render(<App />, document.getElementById('content'));
