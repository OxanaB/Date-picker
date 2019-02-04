import * as React from 'react';
import { DateInput, DateInputProps, DateInputConcern } from './date-input';
import { Calendar, CalendarProps, CalendarConcerns } from './calendar';

export type DatePickerConcern = CalendarConcerns | DateInputConcern;

export interface DatePickerProps {
    anchorDate: Date;
    pickedDate: Date | null;
    month: string;
    year: string;    
    isCalendarToShow: boolean;
    when: (concern: DatePickerConcern) => void;
}

export class DatePicker extends React.Component<DatePickerProps> {
    render() {
        const { anchorDate, pickedDate, month, year } = this.props;
        const calendarProps: CalendarProps = {
            date: anchorDate,
            month: month,
            year: year,
            when: concern => {
                this.props.when(concern);
            }
        };
        const inputFormProps: DateInputProps = {
            pickedDate,
            when: concern => {
                this.props.when(concern);
            }
        };
        return <>
            <DateInput key={pickedDate !== null ? pickedDate.toLocaleString() : ''} {...inputFormProps} />
            {
                this.props.isCalendarToShow
                    ? <Calendar {...calendarProps} />
                    : null
            }
        </>;
    }
}