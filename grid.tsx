import * as React from 'react';
import { getGridsStartAndFinishPoints, makeGrid } from './grid-maker';


export interface GridProps {
    date: Date;
}

export class Grid extends React.Component<GridProps> {
    render() {
        const { date } = this.props;
        const { firstDayOnTheGrid, lastDayOnTheGrid } = getGridsStartAndFinishPoints(date);
        const gridCurrentMonth = makeGrid(firstDayOnTheGrid, lastDayOnTheGrid);

        return <tbody>

            {
                gridCurrentMonth.map((week, weekIndex) => {
                    return <tr key={weekIndex}>{
                        week.map((date) => {
                            return <td key={date.toDateString()}>
                                <a onClick={e => {
                                    e.preventDefault;
                                    ;
                                }}>
                                {date.getDate()}
                                </a>
                            </td>;
                        })}
                    </tr>;
                })
            }


        </tbody>
    }
}












