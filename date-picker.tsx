import * as React from 'react';
import { Grid } from './grid';
import { PreviousMonthButton, PreviousMonthConcern } from './previous-month-button';
import { NextMonthConcern, NextMonthButton } from './next-month-button';
import { MonthViewer } from './month-viewer';
import { GridCapture } from './grid-capture';

export interface DatePickerProps {
    date: Date;
    when: (concern: PreviousMonthConcern | NextMonthConcern) => void;
}

export class DatePicker extends React.Component<DatePickerProps> {

    render() {
        const { date } = this.props;
        return <div className="date-picker">
            <div className="nav">
                <PreviousMonthButton when={this.props.when} />
                <MonthViewer date={date} />
                <NextMonthButton when={this.props.when} />
            </div>
            <table className="grid">
                <GridCapture />
                <Grid date={date} />
            </table>
        </div>
    }
}