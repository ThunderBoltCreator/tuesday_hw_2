import {FC} from 'react'
import React from 'react'
import {MessageType} from '../HW1'
import s from './FriendMessage.module.css'

interface IFriendMessage {
    message: MessageType
}
// создать тип вместо any и отобразить приходящие данные
const FriendMessage: FC<IFriendMessage> = ({message}) => {
    return (
        <div
            id={'hw1-friend-message-' + message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-' + message.id}
                    // создаёт студент
                   src={message.user.avatar}
                    alt={'Avatar'}
                    //
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + message.id}
                        className={s.friendName}
                    >
                        {/*создаёт студент*/}
                        {message.user.name}
                        {/**/}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + message.id}
                        className={s.friendMessageText}
                    >
                        {/*создаёт студент*/}
                        {message.message.text}
                        {/**/}
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + message.id}
                className={s.friendTime}
            >
                {/*создаёт студент*/}
                {message.message.time}
                {/**/}
            </div>
        </div>
    )
}

export default FriendMessage
