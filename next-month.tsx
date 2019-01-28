import * as React from 'react';
import { getGridsStartAndFinishPoints, makeGrid } from './grid-maker';

export interface NextMonthProps {
    date: Date;
}

export class NextMonth extends React.Component<NextMonthProps> {
    
    render() {
        const currentMonth = this.props.date.getMonth();
        const currentYear = this.props.date.getFullYear();
        const nextMonth = new Date(currentYear, currentMonth);
        const { firstDayOnTheGrid, lastDayOnTheGrid } = getGridsStartAndFinishPoints(nextMonth);
        
        const gridNextMonth = makeGrid(firstDayOnTheGrid, lastDayOnTheGrid);
        return <tbody>
        
            {
                gridNextMonth.map((week, weekIndex) => {
                    return <tr key={weekIndex}>{
                        week.map((date) => {
                            return <td key={date.toDateString()}>{date.getDate()}</td>;
                        })}
                    </tr>;
                })
            }

        </tbody>
    }
}