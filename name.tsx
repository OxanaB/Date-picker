import * as React from 'react';

export interface NameConcern {
    about: 'name-input';
    name: string
}

export interface NameProps {
    name: string;
    when: (concern: NameConcern) => void;
}

export class Name extends React.Component<NameProps> {
    render() {
        const { name } = this.props;
        return <>
            <label>
                <div>Имя, фамилия</div>
                <div><input type="text" value={name}
                    onChange={e => {
                        this.props.when({ about: 'name-input', name: e.currentTarget.value })
                    }} /></div>
            </label>
        </>
    }
}