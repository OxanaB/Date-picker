import * as React from 'react';

export interface DiveLevelConcern {
    about: 'level-entered';
    level: string
}

export interface DiveLevelProps {
    level: string;
    when: (concern: DiveLevelConcern) => void;
}

export class DiveLevel extends React.Component<DiveLevelProps> {
    render() {
        const { level } = this.props;
        return <>
            <label htmlFor="level">Ваш дайверский уровень 
                <input type="text" value={level}
                    onChange={e => {
                        this.props.when({ about: 'level-entered', level: e.currentTarget.value })
                    }} />
            </label>
        </>
    }
}