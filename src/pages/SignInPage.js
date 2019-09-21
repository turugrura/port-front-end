import React, {Component} from 'react';
import { connect } from 'react-redux';

import { signIn } from '../store/actions/authAction';

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

        // if (this.props.currentUser.error) {
        //     alert(this.props.currentUser.message);
        //     this.props.clearCurrentUser(this.props.currentUser);
        // };
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
    // clearErrorCurrentUser
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn);