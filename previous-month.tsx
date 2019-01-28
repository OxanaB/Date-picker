import * as React from 'react';
import { getGridsStartAndFinishPoints, makeGrid } from './grid-maker';

export interface PreviousMonthProps {
    date: Date;
}

export class PreviousMonth extends React.Component<PreviousMonthProps> {
    
    render() {
        const currentMonth = this.props.date.getMonth();
        const currentYear = this.props.date.getFullYear();
        const previousMonth = new Date(currentYear, currentMonth - 1);
        const { firstDayOnTheGrid, lastDayOnTheGrid } = getGridsStartAndFinishPoints(previousMonth);
        
        const gridPreviousMonth = makeGrid(firstDayOnTheGrid, lastDayOnTheGrid);
        return <table>
        <tbody>
            {
                gridPreviousMonth.map((week, weekIndex) => {
                    return <tr key={weekIndex}>{
                        week.map((date) => {
                            return <td key={date.toDateString()}>{date.getDate()}</td>;
                        })}
                    </tr>;
                })
            }

        </tbody>
    </table>
    }
}