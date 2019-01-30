import * as React from 'react';

export interface InputFormProps {
    pickedDate: Date;
    when: (concern: InputFormConcerns) => void;
}

type InputFormConcerns = ShowCalendarConcern;

export interface ShowCalendarConcern {
    about: 'show-calendar';
    isCalendarToShow: boolean;
}

interface State {
    text: string;
}
export class InputForm extends React.Component<InputFormProps, State> {
    state = {
        text: this.props.pickedDate.toLocaleString()
    }
    render() {
        const { text } = this.state;
        return <form>
            <legend>Choose date: </legend>
            <input type="text"
                value={text}
                onFocus={() => {
                    this.props.when({ about: 'show-calendar', isCalendarToShow: true })
                }}
                onChange={e => {
                    this.setState({ text: e.currentTarget.value });
                }}
            />
        </form>
    }
}