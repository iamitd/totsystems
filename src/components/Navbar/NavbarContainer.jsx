import React from "react";
import {connect} from "react-redux";
import Navbar from "./Navbar";

let mapStateToProps = (state) =>{
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps)(Navbar)