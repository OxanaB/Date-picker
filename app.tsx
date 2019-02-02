import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Form, FormProps, FormConcern } from './form';
import { diveRequests } from './dive-requests';
import { matchOptions, to } from './utils';
import { diveLevelOptions } from './type-ahead-options';

export class App extends React.Component<{}, FormProps> {

    private when = (concern: FormConcern) => {
        switch (concern.about) {
            case 'name-input': {
                this.setState({ name: concern.name });
                break;
            };
            case 'email-input': {
                const isEmailValid = /([+a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/.test(concern.email);
                this.setState({ email: concern.email, isEmailValid });
                break;
            };
            case 'telephone-input': {
                const isTelValid = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/.test(concern.telephone);
                this.setState({ telephone: concern.telephone, isTelValid });
                break;
            };
            case 'level-input': {
                const matchedOptions = matchOptions(diveLevelOptions, concern.level);
                this.setState({
                    level: concern.level,
                    option: matchedOptions,
                    isOptionToShow: true
                });
                break;
            };
            case 'level-picked': {
                const { level } = concern;
                const { pickedLevels } = this.state;
                const newPickedLevels = pickedLevels.concat(level);
                this.setState({
                    pickedLevels: newPickedLevels,
                    isOptionToShow: false,
                    level: ''
                });
                break;
            };
            case 'picked-level-to-delete': {
                const { pickedLevels } = this.state;
                const { level } = concern;
                const newPickedLevels = pickedLevels.filter(oldLevel => oldLevel !== level);
                this.setState({
                    pickedLevels: newPickedLevels,
                });
                break;
            };
            case 'new-tag-added': {
                const { pickedLevels } = this.state;
                const { level } = concern;
                const addTagLevel = pickedLevels.concat(level);
                this.setState({
                    pickedLevels: addTagLevel
                });
                break;
            };
            case 'hotel-input': {
                this.setState({ hotel: concern.hotel });
                break;
            };
            case 'message-input': {
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

    state = to<FormProps>({
        name: '',
        email: '',
        isEmailValid: true,
        telephone: '',
        isTelValid: true,
        level: '',
        option: null,
        isOptionToShow: false,
        pickedDate: null,
        pickedLevels: [],
        anchorDate: new Date(),
        isCalendarToShow: false,
        hotel: '',
        message: '',
        when: this.when,
        newDiveRequest: diveRequests,
    })

    render() {
        const { state } = this;
        return <Form {...state} />;
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
