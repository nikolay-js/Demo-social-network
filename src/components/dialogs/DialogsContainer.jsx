//import React from 'react';
import { sendMessageCreater, updateNewMessageBodyCreater } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
//import StoreContext from '../../StoreContext';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

/* const DialogsContainer = () => {
    return <StoreContext.Consumer> 
        { (store) => {

            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreater());
            }

            let onMessageChange = (body) => {
                store.dispatch(updateNewMessageBodyCreater(body));
            }

            return <Dialogs dialogsPage={store.getState().dialogsPage}
                            updateNewMessageBody={onMessageChange}
                            sendMessage={onSendMessageClick} />
        }
    }
    </StoreContext.Consumer>
} */

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreater());
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreater(body));
        }
        
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);

/* let AuthRedirectComponent = withAuthRedirect(Dialogs);
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
export default DialogsContainer; */