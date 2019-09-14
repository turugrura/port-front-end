import React, {Component} from 'react';
import { connect } from 'react-redux';

import { signUp, clearCurrentUser } from '../stores/actions/authAction';

import SignUpComponent from '../components/auth/SignUp';

class SignUp extends Component {
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
        this.props.signUp(val);
    };

    render() {
        return (
            <div>
                <SignUpComponent onClickSubmit={this.onClickSubmit} />
            </div>
        );
    };
}

const mapStateToProps = state => ({
    currentUser: state.authReducer.currentUser
});

const mapDispatchToProps = {
    signUp,
    clearCurrentUser
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp);