import * as React from 'react';
import { Grid, PickedDateConcern } from './grid';
import { PreviousMonthButton, PreviousMonthConcern } from './previous-month-button';
import { NextMonthConcern, NextMonthButton } from './next-month-button';
import { MonthViewer } from './month-viewer';

export type CalendarConcerns = PreviousMonthConcern | NextMonthConcern | PickedDateConcern;

export interface CalendarProps {
    date: Date;
    when: (concern: CalendarConcerns) => void;
}

export class Calendar extends React.Component<CalendarProps> {

    render() {
        const { date } = this.props;
        return <div className="calendar">
            <div className="nav">
                <PreviousMonthButton when={concern => {
                    this.props.when(concern);
                    }} />
                <MonthViewer date={date} />
                <NextMonthButton when={concern => {
                    this.props.when(concern);
                    }} />
            </div>
            <table className="grid">
                <Grid date={date} when={concern => {
                    this.props.when(concern);
                }} />
            </table>
        </div>
    }
}