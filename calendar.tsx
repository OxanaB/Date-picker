import * as React from 'react';
import { Grid, PickedDateConcern } from './grid';
import { MonthViewer, MonthViewerConcern } from './month-viewer';

export type CalendarConcerns = PickedDateConcern | MonthViewerConcern;

export interface CalendarProps {
    date: Date;
    month: string;
    year: string;
    when: (concern: CalendarConcerns) => void;
}

export class Calendar extends React.Component<CalendarProps> {

    render() {
        const { date, month, year } = this.props;
        return <div className="calendar">
            <MonthViewer date={date} month={month} year={year} when={concern => {
                this.props.when(concern);
            }} />
            <table className="grid">
                <Grid date={date} when={concern => {
                    this.props.when(concern);
                }} />
            </table>
        </div>
    }
}