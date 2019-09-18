import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllUser, updateUserByAdmin } from '../store/actions/userAction';
import { updateCurrentUser } from '../store/actions/authAction';

import { Grid } from '@material-ui/core';

import UserAccount from '../components/user/UserAccount';
import UserList from '../components/user/UserList';
import SettingList from '../components/settingComponent/SettingList';
import UserChangePassword from '../components/user/UserChangePassword';

class SettingPage extends Component {
    constructor() {
        super();

        this.state = {
            listSeleted: 0
        };
    };

    componentDidMount() {
        this.props.getAllUser();
    };

    onChangeListSeleted = idx => {
        this.setState({
            listSeleted: idx
        });
    };

    onUpdateRole = user => {
        this.props.updateUserByAdmin(this.props.currentUser, user);
    };

    onUpdatedCurrentUser = user => {
        this.props.updateCurrentUser(this.props.currentUser, user);
    };

    onChangePassword = password => {
        console.log(password)
    };

    renderDetail = () => {
        switch (this.state.listSeleted) {
            case 0:
                return (
                    <UserAccount
                        currentUser={this.props.currentUser}
                        onUpdatedCurrentUser={this.onUpdatedCurrentUser}
                    />
                );
            case 1:
                return (
                    this.props.currentUser.role !== 'user' ? (
                        <UserList
                            users={this.props.allUser}
                            currentUser={this.props.currentUser}
                            onUpdateRole={this.onUpdateRole}
                        />
                    ) : null                    
                );
            case 11:
                return (
                    <UserChangePassword
                        currentUser={this.props.currentUser}
                        onChangePassword={this.onChangePassword}
                    />
                )
            default:
                return null;
        }
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
                        <SettingList
                            onChangeListSeleted={this.onChangeListSeleted}
                            listSeleted={this.state.listSeleted}
                            currentUser={this.props.currentUser}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={9}
                    >
                        { this.renderDetail() }
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
    getAllUser,
    updateUserByAdmin,
    updateCurrentUser
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SettingPage);