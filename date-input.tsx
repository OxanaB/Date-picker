import * as React from 'react';

export interface DateInputProps {
    pickedDate: Date | null;
    when: (concern: DateInputConcern) => void;
}

export interface DateInputConcern {
    about: 'show-calendar';
    isCalendarToShow: boolean;
}

interface State {
    text: string;
}
export class DateInput extends React.Component<DateInputProps, State> {
    state = {
        text: this.props.pickedDate === null ? '' : this.props.pickedDate.toLocaleDateString()
    }
    render() {
        const { text } = this.state;
        return <>
            <legend>Дата приезда: </legend>
            <input type="text"
                value={text}
                onFocus={() => {
                    this.props.when({ about: 'show-calendar', isCalendarToShow: true })
                }}
                onChange={e => {
                    this.setState({ text: e.currentTarget.value });
                }}
            />
        </>
    }
}