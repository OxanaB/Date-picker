import * as React from 'react';
import { localizer } from './language';

export interface NameConcern {
    about: 'name-input';
    name: string
}

export interface NameProps {
    name: string;
    language: string;
    when: (concern: NameConcern) => void;
}

export class Name extends React.Component<NameProps> {
    render() {
        const { name, language } = this.props;
        return <>
            <label>
                <div>{localizer.useCorrectLanguage(language).form[0]}</div>
                <div><input type="text" value={name}
                    onChange={e => {
                        this.props.when({ about: 'name-input', name: e.currentTarget.value })
                    }} /></div>
            </label>
        </>
    }
}
