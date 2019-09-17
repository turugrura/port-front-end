import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllUser } from '../store/actions/userAction';

import { Grid } from '@material-ui/core';

import UserAccount from '../components/user/UserAccount';
import UserList from '../components/user/UserList';
import SettingList from '../components/settingComponent/SettingList';

class SettingPage extends Component {
    componentDidMount() {
        this.props.getAllUser();
    };

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
                        <SettingList />
                    </Grid>
                    <Grid
                        item
                        xs={9}
                    >
                        <UserAccount currentUser={this.props.currentUser} />
                        <UserList users={this.props.allUser} />
                    </Grid>
                </Grid>
            </div>
        )
    };
}

const mapStateToProps = state => ({
    currentUser: state.authReducer.currentUser,
    allUser: state.userReducer.users
});

const mapDispatchToProps = {
    getAllUser
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SettingPage);