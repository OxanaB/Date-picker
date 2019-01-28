import * as React from 'react';
import { InitialGrid } from './initial-grid';
import { PreviousMonthButton, PreviousMonthConcern } from './previous-month-button';
import { PreviousMonth } from './previous-month';
import { NextMonthConcern, NextMonthButton } from './next-month-button';
import { NextMonth } from './next-month';

export interface DatePickerProps {
    date: Date;
    isCurrentMonth: boolean;
    toShowNextMonth: boolean;
    toShowPreviousMonth: boolean;
    when: (concern: PreviousMonthConcern | NextMonthConcern) => void;
}

export class DatePicker extends React.Component<DatePickerProps> {

    render() {
        const { date, isCurrentMonth, toShowNextMonth } = this.props;
        return <div className="date-picker">
            <div className="nav">
                <PreviousMonthButton when={this.props.when} />
                <NextMonthButton when={this.props.when} />
            </div>
            {
                isCurrentMonth
                    ? <InitialGrid date={date} />
                    : toShowNextMonth ?
                        <NextMonth date={date} />
                        : <PreviousMonth date={date} />

            }
        </div>
    }
}