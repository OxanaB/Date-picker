import * as React from 'react';
import { getGridsStartAndFinishPoints, makeGrid } from './grid-maker';


export interface InitialGridProps {
    date: Date;
}

export class InitialGrid extends React.Component<InitialGridProps> {
    render() {
        const { date } = this.props;
        const { firstDayOnTheGrid, lastDayOnTheGrid } = getGridsStartAndFinishPoints(date);
        const gridCurrentMonth = makeGrid(firstDayOnTheGrid, lastDayOnTheGrid);
        
        return <table>
            <tbody>
                {
                    gridCurrentMonth.map((week, weekIndex) => {
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












