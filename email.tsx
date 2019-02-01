import * as React from 'react';

export interface EmailConcern {
    about: 'email-entered';
    email: string
}

export interface EmailProps {
    email: string;
    isEmailValid: boolean;
    when: (concern: EmailConcern) => void;
}

export class Email extends React.Component<EmailProps> {
    render() {
        
        const { email, isEmailValid } = this.props;
        return <>
            <label htmlFor="email"> 
                <legend>E-mail</legend>
                <input className={isEmailValid ? '': 'invalid'} type="text" value={email}
                    onChange={e => {
                        this.props.when({ about: 'email-entered', email: e.currentTarget.value })
                    }} />
            </label>
        </>
    }
}