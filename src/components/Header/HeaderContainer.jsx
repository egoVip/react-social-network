import React from "react";
import style from './Header.module.css';
import Header from "./Header";
import { connect } from "react-redux";
import { authMeThunkCreator, logoutThunkCreator } from "../../redux/auth-reducer";


class HeaderContainer extends React.Component {
    

    render() {
        return (<Header {...this.props} />)
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,

});

export default connect(mapStateToProps, { logoutThunkCreator })(HeaderContainer);