import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import Music from './components/music/Music';
import Navbar from './components/navbar/Navbar';
import News from './components/news/News';
import Settings from './components/settings/Settings';
import UsersContainer from './components/users/UsersContainer';
import HeaderContainer from './components/header/HeaderContainer';
import LoginPage from './components/login/Login';
import { initializeApp } from './redux/app-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/common/preloader/Preloader';
import { withSuspense } from './hoc/withSuspense';
import SidebarContainer from './components/sidebar/SidebarContainer';

//import DialogsContainer from './components/dialogs/DialogsContainer';
const DialogsContainer = React.lazy(() => import('./components/dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/profile/ProfileContainer'));


class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    }
    
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar isAuth={this.props.isAuth} />
        <div className="app-wrapper-content">

          <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)} />
          <Route path='/dialogs' render={withSuspense(DialogsContainer)} />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
          <Route path='/login' render={() => <LoginPage />} />
          <Route path='/friends' render={() => <SidebarContainer />} />

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
  isAuth: state.auth.isAuth
})

export default compose(
   withRouter,
   connect(mapStateToProps, { initializeApp }))(App);