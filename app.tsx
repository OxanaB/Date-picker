import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Form, FormProps, FormConcern } from './form';
import { diveRequests } from './dive-requests';

export class App extends React.Component<{}, FormProps> {

    private when = (concern: FormConcern) => {
        switch (concern.about) {
            case 'name-entered': {
                this.setState({ name: concern.name });
                break;
            };
            case 'email-entered': {
                const isEmailValid = /([+a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/.test(concern.email);
                this.setState({ email: concern.email, isEmailValid });
                break;
            };
            case 'telephone-entered': {
                this.setState({ telephone: concern.telephone });
                break;
            };
            case 'level-entered': {
                this.setState({ level: concern.level });
                break;
            };
            case 'hotel-entered': {
                this.setState({ hotel: concern.hotel });
                break;
            };
            case 'message-entered': {
                this.setState({ message: concern.message });
                break;
            };
            case 'show-calendar': {
                this.setState({ isCalendarToShow: concern.isCalendarToShow });
                break;
            };
            case 'show-next-month': {
                const date = this.state.anchorDate;
                this.setState({ anchorDate: new Date(date.getFullYear(), date.getMonth() + 1) });
                break;
            };
            case 'show-previous-month': {
                const date = this.state.anchorDate;
                this.setState({ anchorDate: new Date(date.getFullYear(), date.getMonth() - 1) });
                break;
            };
            case 'date-is-picked': {
                this.setState({
                    pickedDate: concern.pickedDate,
                    isCalendarToShow: false
                })
                break;
            }


        }

    }

    state = {
        name: '',
        email: '',
        isEmailValid: true,
        telephone: '',
        level: '',
        pickedDate: null,
        anchorDate: new Date,
        isCalendarToShow: false,
        hotel: '',
        message: '',
        when: this.when,
        newDiveRequest: diveRequests,
    }

    render() {
        const { state } = this;
        return <Form {...state} />;
    }
}

ReactDOM.render(<App />, document.getElementById('root'));