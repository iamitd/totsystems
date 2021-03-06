import React from 'react';
import {connect} from "react-redux";
import {
    sendMessageCreator,
    deleteMessageCreator,
    editMessageCreator, reverseMessageCreator
} from "../../redux/chat-reducer";
import Chat from "./Chat";
import {animateScroll} from "react-scroll";


class ChatContainer extends React.Component {
    componentDidMount() {
        animateScroll.scrollToBottom({
            containerId: "dialogarea"
        });
        if (this.props.chatPage.flood) {
            this.props.chatPage.messages.reverse()
            this.props.reverseMessageCreator(!this.props.flood)
        }

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
        sendMessage: (newMessageBody) => {dispatch(sendMessageCreator(newMessageBody)) },
        deleteMessage: (id) => {dispatch(deleteMessageCreator(id))},
        editMessage: (id,newMessage) => {dispatch(editMessageCreator(id,newMessage))},
        reverseMessageCreator: (body) => {dispatch(reverseMessageCreator(body))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ChatContainer)