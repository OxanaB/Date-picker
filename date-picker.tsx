import * as React from 'react';
import { InitialGrid } from './initial-grid';
import { PreviousMonthButton, PreviousConcern } from './left';
import { PreviousMonth } from './previous-month';

export interface DatePickerProps {
    date: Date;
    isCurrentMonth: boolean;
    when: (concern: PreviousConcern) => void;
}

export class DatePicker extends React.Component<DatePickerProps> {
    render() {
        const { date, isCurrentMonth } = this.props;
        return <>
            <PreviousMonthButton when={this.props.when} />
            {
                isCurrentMonth === true
                    ? <InitialGrid date={date} />
                    : <PreviousMonth date={date} />
            }
        </>
    }
}