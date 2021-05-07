import React from 'react';
//import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }
    deActivateEditMode = () => {
        debugger;
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.props.userId,this.props.photo, this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps, prevState) {
        debugger;
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    render() {
        debugger;
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>
                            {!this.props.status ? '-----------' : this.props.status}
                        </span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true}
                            onBlur={this.deActivateEditMode} value={this.state.status} />
                    </div>
                }
            </div>
        )
    }
}
export default ProfileStatus;