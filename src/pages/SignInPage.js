import React, {Component} from 'react';
import { connect } from 'react-redux';

import { signIn, clearCurrentUser } from '../store/actions/authAction';

import SignInComponent from '../components/auth/SignIn';

class SignIn extends Component {
    componentDidMount() {
        if (this.props.currentUser.token) {
            this.props.history.push('/');
        };
    };

    componentDidUpdate(prevState) {
        if (this.props.currentUser.token) {
            this.props.history.push('/');
        };

        if (this.props.currentUser.message) {
            alert(this.props.currentUser.message);
            this.props.clearCurrentUser();
        };
    };

    onClickSubmit = (val) => {
        this.props.signIn(val);
    };

    render() {
        return (
            <div>
                <SignInComponent onClickSubmit={this.onClickSubmit} />
            </div>
        );
    };
}

const mapStateToProps = state => ({
    currentUser: state.authReducer.currentUser
});

const mapDispatchToProps = {
    signIn,
    clearCurrentUser
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn);