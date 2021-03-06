import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logoutAC} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth.isAuth,
    userId: state.auth.userId,
    chatPage:state.chatPage
});


export default connect(mapStateToProps, {logoutAC})(HeaderContainer);