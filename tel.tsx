import * as React from 'react';

export interface TelephoneConcern {
    about: 'telephone-input';
    telephone: string
}

export interface TelephoneProps {
    telephone: string;
    isTelValid: boolean;
    when: (concern: TelephoneConcern) => void;
}

export class Telephone extends React.Component<TelephoneProps> {
    render() {
        const { telephone, isTelValid } = this.props;
        return <>
            <label>
                <div>Номер телефона</div>
                <div><input className={isTelValid ? '' : 'invalid'} type="text" value={telephone}
                    onChange={e => {
                        this.props.when({ about: 'telephone-input', telephone: e.currentTarget.value })
                    }} /></div>
            </label>
        </>
    }
}