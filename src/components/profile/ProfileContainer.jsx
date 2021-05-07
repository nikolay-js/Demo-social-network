import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile, getUserStatus, updateUserStatus } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
//import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount() {
        debugger;
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.autorizedUserId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }
    componentDidUpdate(prevProps, prevState) {
        debugger;
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.props.getUserProfile(this.props.match.params.userId);
            this.props.getUserStatus(this.props.match.params.userId);
        }
    }

    render() {

        return <div>
            <Profile {...this.props}
                profile={this.props.profile}
                userId={!this.props.match.params.userId
                    ? this.props.autorizedUserId : this.props.match.params.userId}
                status={this.props.status}
                updateStatus={this.props.updateUserStatus} />
        </div>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
    withRouter,
    //withAuthRedirect
)(ProfileContainer);

/* let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
let withRoutDataContainerComponent = withRouter(AuthRedirectComponent);
export default connect(mapStateToProps, {getUserProfile})(withRoutDataContainerComponent); */