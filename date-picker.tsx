import * as React from 'react';
import { DateInput, DateInputProps, DateInputConcern } from './date-input';
import { Calendar, CalendarProps, CalendarConcerns } from './calendar';

export type DatePickerConcern = CalendarConcerns | DateInputConcern;

export interface DatePickerProps {
    anchorDate: Date;
    pickedDate: Date | null;
    isCalendarToShow: boolean;
    when: (concern: DatePickerConcern) => void;
}

export class DatePicker extends React.Component<DatePickerProps> {
    render() {
        const { anchorDate, pickedDate } = this.props;
        const calendarProps: CalendarProps = {
            date: anchorDate,
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
        return <div className="date-picker">
            <DateInput key={pickedDate !== null ? pickedDate.toLocaleString() : ''} {...inputFormProps} />
            {
                this.props.isCalendarToShow
                    ? <Calendar {...calendarProps} />
                    : null
            }
        </div>;
    }
}