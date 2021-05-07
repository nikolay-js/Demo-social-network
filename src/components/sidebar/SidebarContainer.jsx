import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Sidebar from './Sidebar';
import { follow, unfollow, requestUsers } from '../../redux/users-reducer';
import Preloader from '../common/preloader/Preloader';
//import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getUsers, getIsFetching } from '../../redux/users-selectors';

class SidebarContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers();
    }

    render() {
        return <>
            {this.props.isFetching ? <div>Loading...</div> : null}
            <Sidebar users={this.props.users} />
        </>

    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        isFetching: getIsFetching(state)
    }
}

export default compose(
    //withAuthRedirect,
    withRouter,
    connect(mapStateToProps, { follow, unfollow, requestUsers })
)(SidebarContainer);