import React from "react";
import MessageItem from "./Message/MessageItem";
import s from './Chat.module.css';
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Chat = (props) => {
    let state = props.chatPage;
    let messages = state.messagesFlood;
    let currentChat = props.history.location.pathname
    if (currentChat === "/work") {
        messages = state.messagesWork
    }
    let messagesElements = messages.map(m => <MessageItem user={state.users} message={m.message}
                                                                sender={m.sender} userId={props.userId}
                                                                delete={props.deleteMessage} messageId={m.id}
    edit = {props.editMessage} currentChat ={currentChat}/>)
    let addNewMessage = (values) => {
        if (!(values.newMessageBody === undefined)) {
            if (currentChat === "/work") {
                props.sendMessage("work",values.newMessageBody)
            } else {
                props.sendMessage("flood",values.newMessageBody)
            }
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