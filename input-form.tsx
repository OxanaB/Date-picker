import * as React from 'react';

export interface InputFormProps {
    when: (concern: ShowCalendarConcern) => void;
}

export interface ShowCalendarConcern {
    about: 'show-calendar';
    isCalendarToShow: boolean;
}

export class InputForm extends React.Component<InputFormProps> {
    render() {
        return <form>
            <input type="text" onFocus={(e) => {
                e.preventDefault;
                this.props.when({ about: 'show-calendar', isCalendarToShow: true })
            }} />
        </form>
    }
}