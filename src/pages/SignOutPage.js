import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signOut } from '../store/actions/authAction';

class SignOut extends Component {
    componentDidMount() {
        this.props.signOut(this.props.currentUser);
    };

    componentDidUpdate() {
        if (!this.props.currentUser.token) {
            this.props.history.push('/');
        };
    };

    render() {
        return (
            <div>
                Sign out...
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currentUser: state.authReducer.currentUser
});

export default connect(
    mapStateToProps,
    { signOut }
)(SignOut);