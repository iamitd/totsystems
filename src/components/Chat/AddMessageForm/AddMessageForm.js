import {Field, reduxForm} from "redux-form";
import React from "react";

const AddMessageForm = (props) => {
    const onSubmit = (e) => {
        props.handleSubmit();
        props.reset();
        e.preventDefault()
    }

    const onKeyDown = e =>{
        if(e.code === 'Enter') {
            props.handleSubmit();
            props.reset();
            e.preventDefault()
        }
    }
    return (
        <form onSubmit={onSubmit}>
                <Field component="textarea" name="newMessageBody" placeholder="Enter your message" onKeyPress={onKeyDown}/>
                <button/>
        </form>
    )
}
export default reduxForm({form: "dialogSendMessageForm"})(AddMessageForm);