import React from 'react';
import ReactDOM from 'react-dom';

import ProfilePage from './components/profile-page/profile-page.jsx'
import DisplayPage from './components/display-page/display-page.jsx'

const PAGES = ['profile', 'display'];

class App extends React.Component {
  constructor() {
    super();
    this.state = {currentPage: 'profile'};
  }

  changePage(pageName) {
    if (!PAGES.includes(pageName)) {
      throw new Error(`${pageName} is not a valid page`);
    }

    this.setState({currentPage: pageName});
  }

  render() {
    let display = [
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
    ];

    if (this.state.currentPage === 'profile') {
      display.push(
        <ProfilePage
        userData={getData()}
        changePage={this.changePage.bind(this)}
        />
      );
    } else if (this.state.currentPage === 'display') {
      display.push(
        <DisplayPage userData={getData()} />
      );
    } else {
      throw new Error('this.state.page is not valid');
    }

    return (
      <div className='app'>
        {display}
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
