import * as React from 'react';
import { InputForm, InputFormProps, InputFormConcerns } from './input-form';
import { Calendar, CalendarProps, CalendarConcerns } from './calendar';

export type DatePickerConcern = CalendarConcerns | InputFormConcerns;

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
        const inputFormProps: InputFormProps = {
            pickedDate,
            when: concern => {
                this.props.when(concern);
            }
        };
        return <div className="date-picker">
            <InputForm key={pickedDate !== null ? pickedDate.toLocaleString() : ''} {...inputFormProps} />
            {
                this.props.isCalendarToShow
                    ? <Calendar {...calendarProps} />
                    : null
            }
        </div>;
    }
}