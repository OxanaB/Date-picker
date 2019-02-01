import * as React from 'react';

export interface MessageConcern {
    about: 'message-input';
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
            <label>
                <div>Ваше сообщение</div>
                <div><textarea value={message}
                    onChange={e => {
                        this.props.when({ about: 'message-input', message: e.currentTarget.value })
                     }} /></div>
            </label>
        </>
    }
}