import * as React from 'react';
import { InputForm, InputFormProps } from './input-form';
import { Calendar, CalendarProps } from './calendar';

export interface DatePickerProps {
    isCalendarToShow: boolean;
    inputForm: InputFormProps;
    calendar: CalendarProps;
}

export class DatePicker extends React.Component<DatePickerProps> {
    render() {
        return <div className="date-picker">
            <InputForm 
                when={ concern => { 
                    this.props.inputForm.when(concern); 
            }}/>
            {
                this.props.isCalendarToShow 
                ? <Calendar 
                date={this.props.calendar.date} 
                when={ concern => { 
                    this.props.calendar.when(concern);
                }}/>
                : null
            }
                </div>
    }
}