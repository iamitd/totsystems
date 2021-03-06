import React, {useState}from "react";
import s from './MessageItem.module.css';

const MessageItem = (props) => {
    const editable = (props.sender - 1 == props.userId);
    let [editMode, setEditMode] = useState(false);
    let [editMessage, setEditMessage] = useState(props.message)


    const  deleteMessage = () => {
        props.delete(props.messageId)
    }
    const onMessageChange =(e) => {
        setEditMessage(e.currentTarget.value)
    }
    const activateEditMode =() => {
        setEditMode(!editMode);
        if (editMode) {
            props.edit(props.messageId,editMessage);
        }
    }
    const onKeyDown = e =>{
        if(e.code === 'Enter') {
            activateEditMode()
        }
    }
    return (
        <li className={s.messageItem}>
            <img className={s.img} src={props.user[props.sender - 1].profileImg} title={props.user[props.sender - 1].name}></img>
            <div className={s.message}>
                <div className={s.nameAndEdit} >
                    <div className={s.name}>{props.user[props.sender - 1].name}</div>
                    { editable && <div className={s.editPanel}>
                        <button className={s.editButton} onClick={activateEditMode}></button>
                        <button className={s.deleteButton} onClick={deleteMessage}></button>
                    </div>}
                </div>
                {!editMode &&
                <div className={s.messageText}>{props.message}</div>
                }
                {editMode &&
                <div>
                    <input onChange={onMessageChange} autoFocus={true} onBlur={activateEditMode} onKeyDown={onKeyDown} value={editMessage}/>
                </div>
                }
            </div>
        </li>
    )
}


export default MessageItem;