import * as React from 'react';

export interface MessageConcern {
    about: 'message-entered';
    message: string
}

export interface MessageProps {
    message: string;
    when: (concern: MessageConcern) => void;
}

export class Message extends React.Component<MessageProps> {
    render() {
        const { message } = this.props;
        return <>
            <label htmlFor="message">
                <legend>Ваше сообщение</legend>
                <textarea value={message}
                    onChange={e => {
                        this.props.when({ about: 'message-entered', message: e.currentTarget.value })
                     }} />
            </label>
        </>
    }
}