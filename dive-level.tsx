import * as React from 'react';

export interface NewTagConcern {
    about: 'new-tag-added';
    level: string;
}

export interface LevelInputConcern {
    about: 'level-input';
    level: string;
}

export interface LevelPickedConcern {
    about: 'level-picked';
    level: string;
}

export interface PickedLevelToDeleteConcern {
    about: 'picked-level-to-delete';
    level: string;
}

export type DiveLevelConcern = LevelInputConcern | LevelPickedConcern | PickedLevelToDeleteConcern | NewTagConcern;

export interface DiveLevelProps {
    level: string;
    option: string[] | null;
    isOptionToShow: boolean;
    pickedLevels: string[];
    when: (concern: DiveLevelConcern) => void;
}

export class DiveLevel extends React.Component<DiveLevelProps> {
    render() {
        const { level, option, isOptionToShow, pickedLevels } = this.props;

        return <>
            <label>
                <div>Ваш дайверский уровень</div>
                <div><input type="text" value={level}
                    onChange={e => {
                        this.props.when({
                            about: 'level-input',
                            level: e.currentTarget.value
                        })
                    }}
                    onKeyDown={({ keyCode }) => {
                        if (keyCode === 13) { 
                            this.props.when({
                                about: 'new-tag-added',
                                level 
                            })
                        }
                    }} /></div>
                {
                    option !== null && isOptionToShow
                        ? option.map(machedOption => {
                            return <div key={machedOption}>
                                <a href="#" onClick={e => {
                                    e.preventDefault();
                                    this.props.when({
                                        about: 'level-picked',
                                        level: machedOption,
                                    });
                                }}>{machedOption}</a></div>

                        })
                        : null
                }
                {pickedLevels.map(level => {
                    return <div key={level}>
                        {level}
                        <a href="#" onClick={e => {
                            e.preventDefault();
                            this.props.when({
                                about: 'picked-level-to-delete',
                                level: level
                            })
                        }}>x</a></div>
                })}
            </label>
        </>
    }
}