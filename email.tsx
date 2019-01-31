import * as React from 'react';

export interface EmailConcern {
    about: 'email-entered';
    email: string
}

export interface EmailProps {
    email: string;
    when: (concern: EmailConcern) => void;
}

export class Email extends React.Component<EmailProps> {
    render() {
        const { email } = this.props;
        return <>
            <label htmlFor="email">E-mail: 
                <input type="text" value={email}
                    onChange={e => {
                        this.props.when({ about: 'email-entered', email: e.currentTarget.value })
                    }} />
            </label>
        </>
    }
}