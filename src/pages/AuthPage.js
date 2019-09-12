import React, {Component} from 'react';

import SignIn from '../components/auth/SignIn';
import SignUp from '../components/auth/SignUp';

class AuthPage extends Component {
    render() {
        return (
            <div>
                <div>
                    <SignIn />
                </div>
                <div>
                    <SignUp />
                </div>
            </div>
        );
    };
}

export default AuthPage;