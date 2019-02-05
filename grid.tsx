import * as React from 'react';
import { getGridsStartAndFinishPoints, makeGrid } from './grid-maker';
import { checkLanguage } from './language';


export interface GridProps {
    date: Date;
    when: (concern: PickedDateConcern) => void;
}

export interface PickedDateConcern {
    about: 'date-is-picked';
    pickedDate: Date;
}

export class Grid extends React.Component<GridProps> {
    render() {
        const { date } = this.props;
        const { firstDayOnTheGrid, lastDayOnTheGrid, lastDayOfMonth } = getGridsStartAndFinishPoints(date);
        const gridCurrentMonth = makeGrid(firstDayOnTheGrid, lastDayOnTheGrid, lastDayOfMonth);
        const days = checkLanguage();
        return <>
            <thead>
                <tr>
                    {
                        days.map((day) => {
                            return <th key={day.toString()}> {day}
                            </th>;
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    gridCurrentMonth.map((week, weekIndex) => {
                        return <tr key={weekIndex}>{
                            week.map(date => {
                                return <td key={date.toDateString()}>
                                    <a href="" onClick={e => {
                                        e.preventDefault();
                                        this.props.when({ about: 'date-is-picked', pickedDate: date });
                                    }}>
                                        {date.getDate()}
                                    </a>
                                </td>;
                            })}
                        </tr>;
                    })
                }


            </tbody>
        </>
    }
}












