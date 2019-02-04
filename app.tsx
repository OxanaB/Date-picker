import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Form, FormProps, FormConcern } from './form';
import { diveRequests } from './dive-requests';
import { matchOptions, to, broke, intersect, minus } from './utils';
import { diveLevelOptions } from './type-ahead-options';

export class App extends React.Component<{}, FormProps> {

    private when = (concern: FormConcern) => {
        switch (concern.about) {
            case 'name-input': {
                this.setState({ name: concern.name });
                break;
            };
            case 'email': {
                switch (concern.email.about) {
                    case 'field-input': {
                        const { value } = concern.email;
                        const isValid = /([+a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/.test(value);
                        this.setState({
                            email: { value, isValid }
                        });
                        break;
                    }
                    default: return broke(concern.email.about);
                }
                break;
            };
            case 'telephone': {
                switch (concern.telephone.about) {
                    case 'field-input': {
                        const { value } = concern.telephone;
                        const isValid = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/.test(value);
                        this.setState({
                            telephone: { value, isValid }
                        });
                        break;
                    }
                    default: return broke(concern.telephone.about);
                }
                break;
            };
            case 'level-input': {
                const { pickedLevels } = this.state;
                if (pickedLevels.length === 0) {
                    const matchedOptions = matchOptions(diveLevelOptions, concern.level);
                    this.setState({
                        level: concern.level,
                        option: matchedOptions,
                        isOptionToShow: true
                    });                    
                } else {
                    const noPicked = minus(diveLevelOptions, pickedLevels);
                    const matchedOptions = matchOptions(noPicked, concern.level);
                    this.setState({
                        level: concern.level,
                        option: matchedOptions,
                        isOptionToShow: true
                    });
                }
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
                })
                break;
            };
            case 'hide-options': {
                this.setState({
                    isOptionToShow: false
                })
                break;
            }
            case 'picked-level-to-delete': {
                const { level } = concern;
                const { pickedLevels } = this.state;
                const newPickedLevels = pickedLevels.filter(oldLevel => oldLevel !== level);
                this.setState({
                    pickedLevels: newPickedLevels,
                    level: ''
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
            default: return broke(concern);
        }
    }

    state = to<FormProps>({
        name: '',
        email: { value: '', isValid: true },
        telephone: { value: '', isValid: true },
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
