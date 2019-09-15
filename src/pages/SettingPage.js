import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Grid } from '@material-ui/core';

import UserAccount from '../components/user/UserAccount';

class SettingPage extends Component {
    render() {
        return (
            <div>
                <Grid
                    container
                >
                    <Grid
                        item
                        xs={3}
                    >
                        Menu
                    </Grid>
                    <Grid
                        item
                        xs={9}
                    >
                        <UserAccount currentUser={this.props.currentUser} />
                    </Grid>
                </Grid>
            </div>
        )
    };
}

const mapStateToProps = state => ({
    currentUser: state.authReducer.currentUser
});

const mapDispatchToProps = {

};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SettingPage);