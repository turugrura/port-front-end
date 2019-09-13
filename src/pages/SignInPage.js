import React, {Component} from 'react';
import { connect } from 'react-redux';

import { signIn } from '../stores/actions/authAction';

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
    };

    onClickSubmit = (val) => {
        this.props.signIn(val);
    };

    render() {
        return (
            <div>
                <div>
                    <SignInComponent onClickSubmit={this.onClickSubmit} />
                </div>
            </div>
        );
    };
}

const mapStateToProps = state => ({
    currentUser: state.authReducer.currentUser
});

const mapDispatchToProps = {
    signIn
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn);