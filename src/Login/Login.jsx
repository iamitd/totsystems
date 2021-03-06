import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../components/common/FormControls/FormControls";
import {required} from "../utils/validators/validators";
import {loginAC} from "../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import style from "./../components/common/FormControls/FormControls.module.css"

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"login"} name={"login"} component={Input} validate={[required]}/>
        </div>
        <div>
            <Field placeholder={"password"} name={"password"} type={"password"} component={Input} validate={[required]}/>
        </div>
            {props.error1 && <div className={style.formSummaryError}>
                Неправильный логин или пароль
            </div>
            }
        <div>
            <button>Login</button>
        </div>
    </form>
    )

}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginAC(formData.login, formData.password)
    }
    if (props.isAuth) {
        return <Redirect to={"/work"}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} error1={props.error}/>
    </div>
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    error: state.auth.error
})
export default connect(mapStateToProps,{loginAC})(Login);