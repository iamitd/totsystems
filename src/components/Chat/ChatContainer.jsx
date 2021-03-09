import React from 'react';
import {connect} from "react-redux";
import {
    sendMessageCreator,
    deleteMessageCreator,
    editMessageCreator
} from "../../redux/chat-reducer";
import Chat from "./Chat";
import {animateScroll} from "react-scroll";
import {withRouter} from "react-router";
import {compose} from "redux";


class ChatContainer extends React.Component {
    componentDidMount() {
        animateScroll.scrollToBottom({
            containerId: "dialogarea"
        });

    }
    componentDidUpdate() {
        animateScroll.scrollToBottom({
            containerId: "dialogarea"
        });
    }
    render() {
        return  <Chat {...this.props}/>
    }
}
let mapStateToProps = (state) =>{
    return {
        chatPage:state.chatPage,
        userId:state.auth.userId
    }
}
let mapDispatchToProps = (dispatch) =>{
    return {
        sendMessage: (chatType,newMessageBody) => {dispatch(sendMessageCreator(chatType,newMessageBody)) },
        deleteMessage: (chatType,id) => {dispatch(deleteMessageCreator(chatType,id))},
        editMessage: (chatType,id,newMessage) => {dispatch(editMessageCreator(chatType,id,newMessage))}
    }
}

export default compose(connect(mapStateToProps,mapDispatchToProps),withRouter)(ChatContainer)