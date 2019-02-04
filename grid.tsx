import * as React from 'react';
import { getGridsStartAndFinishPoints, makeGrid } from './grid-maker';
import { string } from 'prop-types';


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
        const dayEn = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const dayRu = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
        return <>
            <thead>
                <tr>
                    {window.navigator.language === "en-US" ?
                        dayEn.map((day) => {
                            return <th key={day.toString()}> {day}
                            </th>;
                        })
                        : dayRu.map((day) => {
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












