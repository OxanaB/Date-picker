import * as React from 'react';

export interface TelephoneConcern {
    about: 'telephone-entered';
    telephone: string
}

export interface TelephoneProps {
    telephone: string;
    when: (concern: TelephoneConcern) => void;
}

export class Telephone extends React.Component<TelephoneProps> {
    render() {
        const { telephone } = this.props;
        return <>
            <label htmlFor="telephone">Номер телефона
                <input type="text" value={telephone}
                    onChange={e => {
                        this.props.when({ about: 'telephone-entered', telephone: e.currentTarget.value })
                    }} />
            </label>
        </>
    }
}