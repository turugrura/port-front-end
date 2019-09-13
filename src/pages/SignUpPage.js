import React, {Component} from 'react';

import SignUpComponent from '../components/auth/SignUp';

class SignUp extends Component {
    render() {
        return (
            <div>
                <div>
                    <SignUpComponent />
                </div>
            </div>
        );
    };
}

export default SignUp;