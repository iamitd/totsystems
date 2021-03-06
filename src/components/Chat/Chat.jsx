import React from "react";
import MessageItem from "./Message/MessageItem";
import s from './Chat.module.css';
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Chat = (props) => {
    let state = props.chatPage;
    let messages = state.messages
    let messagesElements = messages.map(m => <MessageItem user={state.users} message={m.message}
                                                                sender={m.sender} userId={props.userId}
                                                                delete={props.deleteMessage} messageId={m.id}
    edit = {props.editMessage}/>)
    let addNewMessage = (values) => {
        if (!(values.newMessageBody === undefined)) {
            props.sendMessage(values.newMessageBody)
        }
    }
    return (
        <div className={s.chat} >
            <div id="dialogarea" className={s.dialogarea}>
                <ul>{messagesElements}</ul>
        </div>
            <div className={s.addMessageForm}>
                <AddMessageForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

export default Chat;