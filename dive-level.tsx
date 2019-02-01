import * as React from 'react';

export interface DiveLevelConcern {
    about: 'level-input';
    level: string;
    isOptionToShow: boolean;
}

export interface DiveLevelProps {
    level: string;
    option: string[] | null;
    isOptionToShow: boolean;
    when: (concern: DiveLevelConcern) => void;
}

export class DiveLevel extends React.Component<DiveLevelProps> {
    render() {
        const { level, option, isOptionToShow } = this.props;

        return <>
            <label>
                <div>Ваш дайверский уровень</div>
                <div><textarea value={level}
                    onChange={e => {
                        this.props.when({
                            about: 'level-input',
                            level: e.currentTarget.value,
                            isOptionToShow: true
                        })
                    }} /></div>
                {
                    option !== null && isOptionToShow
                        ? option.map(machedOption => {
                            return <div key={machedOption}>
                                <a href="#" onClick={e => {
                                    e.preventDefault();
                                    this.props.when({
                                        about: 'level-input',
                                        level: machedOption,
                                        isOptionToShow: false
                                    });

                                }}>{machedOption}</a></div>

                        })
                        : null
                }
            </label>
        </>
    }
}