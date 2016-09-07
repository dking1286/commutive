import React from 'react';
import ReactDOM from 'react-dom';

import ProfilePage from './components/profile-page/profile-page.jsx';
import DisplayPage from './components/display-page/display-page.jsx';
import LoginPage from './components/login-page/login-page.jsx';
import SignupPage from './components/signup-page/signup-page.jsx';
import InfoPage from './components/info-page/info-page.jsx'

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
        <nav className='top-navbar'>
          <p
          className='navbar-link'
          id='display-page-link'
          onClick={this.changePage.bind(this, {
            pageName: 'display',
            navbarVisible: true,
            userData: this.state.userData,
          })}
          >
            Your results
          </p>

          <p
          className='navbar-link'
          id='profile-page-link'
          onClick={this.changePage.bind(this, {
            pageName: 'profile',
            navbarVisible: true,
            userData: this.state.userData,
          })}
          >
            Your profile
          </p>

          <p
          className='navbar-link'
          id='logout-link'
          onClick={this.changePage.bind(this, {
            pageName: 'login',
            navbarVisible: false,
            userData: null
          })}
          >
            Logout
          </p>

          <p
          className='navbar-link'
          id='info-link'
          onClick={this.changePage.bind(this, {
            pageName: 'info',
            navbarVisible: true,
            userData: this.state.userData
          })}
          >
            About your results
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
          userData={this.state.userData}
          changePage={this.changePage.bind(this)}
          />
        );
        break;

      case 'display':
        pageDisplay = (
          <DisplayPage userData={this.state.userData} />
        );
        break;

      case 'info':
        pageDisplay = (
          <InfoPage />
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



ReactDOM.render(<App />, document.getElementById('content'));
