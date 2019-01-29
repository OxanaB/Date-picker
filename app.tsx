import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DatePicker, DatePickerProps } from './date-picker';
import { broke } from './utils';

interface AppProps {
    datePicker: DatePickerProps;
}

let oldProps: AppProps = {
    datePicker: {
        calendar: {
            date: new Date(),
            when: concern => {
                switch(concern.about) {
                    case 'date-is-picked': {
                        const { pickedDate } = concern;
                        console.log(pickedDate);
                        break;
                    }
                    case 'show-next-month': {
                        const date = oldProps.datePicker.calendar.date;
                        const newProps: AppProps = {
                            ...oldProps,
                            datePicker: {
                                ...oldProps.datePicker,
                                calendar: {
                                    ...oldProps.datePicker.calendar,
                                    date: new Date(date.getFullYear(), date.getMonth() + 1),
                                }
                            }
                        };
                        rerender(newProps);
                        break;
                    }
                    case 'show-previous-month': {
                        const date = oldProps.datePicker.calendar.date;
                        const newProps: AppProps = {
                            ...oldProps,
                            datePicker: {
                                ...oldProps.datePicker,
                                calendar: {
                                    ...oldProps.datePicker.calendar,
                                    date:new Date(date.getFullYear(), date.getMonth() - 1),
                                }
                            }
                        };
                        rerender(newProps);
                        break;
                    }
                    default: return broke(concern);
                }
            },
        },
        inputForm: {
            when: concern => {
                switch(concern.about) {
                    case 'show-calendar': {
                        const newProps: AppProps = {
                            ...oldProps,
                            datePicker: {
                                ...oldProps.datePicker,
                                isCalendarToShow: concern.isCalendarToShow
                            }
                        };
                        rerender(newProps);
                        break;
                    }
                    default: return broke(concern.about);
                }
            },
        },
        isCalendarToShow: false,
    }
}


rerender(oldProps);

function rerender(newProps: AppProps): void {
    oldProps = newProps;
    ReactDOM.render(
        <DatePicker {...oldProps.datePicker} />,
        document.getElementById('root')
    )
}
