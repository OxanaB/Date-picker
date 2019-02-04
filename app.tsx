import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Form, FormProps, FormConcern } from './form';
import { diveRequests } from './dive-requests';
import { matchOptions, to, broke, minus, monthToString, monthFromStringToNumber } from './utils';
import { diveLevelOptions } from './type-ahead-options';
import { monthEn, monthRU } from './month-viewer';

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
                const { anchorDate } = this.state;
                const newAnchorDate = new Date(anchorDate.getFullYear(), anchorDate.getMonth() + 1);
                const newMonth = monthToString(monthRU, newAnchorDate.getMonth());
                const newYear = newAnchorDate.getFullYear().toString();
                this.setState({
                    anchorDate: newAnchorDate,
                    month: newMonth,
                    year: newYear
                });
                break;
            };
            case 'show-previous-month': {
                const { anchorDate } = this.state;
                const newAnchorDate = new Date(anchorDate.getFullYear(), anchorDate.getMonth() - 1);
                const newMonth = monthToString(monthRU, newAnchorDate.getMonth());
                const newYear = newAnchorDate.getFullYear().toString();
                this.setState({
                    anchorDate: newAnchorDate,
                    month: newMonth,
                    year: newYear
                });
                break;
            };
            case 'month-choise': {
                const { month } = concern;
                const { year } = this.state;
                const choosenMonth = monthFromStringToNumber(month, monthRU);
                const yearNumber = parseInt(year);
                const newAnchorDate = new Date(yearNumber, choosenMonth);
                const monthText = monthToString(monthRU, choosenMonth);
                this.setState({
                    anchorDate: newAnchorDate,
                    month: monthText
                });
                break;
            };
            case 'year-choise': {
                const { year } = concern;
                const choosenYear = parseInt(year);
                const newAnchorDate = new Date(choosenYear);
                const yearText = choosenYear.toString();
                this.setState({
                    anchorDate: newAnchorDate,
                    year: yearText
                });
                break;
            };            
            case 'date-is-picked': {
                this.setState({
                    pickedDate: concern.pickedDate,
                    isCalendarToShow: false
                });
                break;
            };
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
        month: monthToString(monthRU, new Date().getMonth()),
        year: new Date().getFullYear().toString(),
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
