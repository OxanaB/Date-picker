import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DatePicker, DatePickerProps } from './date-picker';
import { broke } from './utils';
import { Form } from './form';

interface AppProps {
    datePicker: DatePickerProps;

}

let oldProps: AppProps = {
    datePicker: {
        isCalendarToShow: false,
        pickedDate: null,
        anchorDate: new Date(),
        when: concern => {
            switch (concern.about) {
                case 'date-is-picked': {
                    const newProps: AppProps = {
                        ...oldProps,
                        datePicker: {
                            ...oldProps.datePicker,
                            pickedDate: concern.pickedDate,
                        }
                    };
                    rerender(newProps);
                    break;
                }
                case 'show-next-month': {
                    const { anchorDate } = oldProps.datePicker;
                    const newProps: AppProps = {
                        ...oldProps,
                        datePicker: {
                            ...oldProps.datePicker,
                            anchorDate: new Date(anchorDate.getFullYear(), anchorDate.getMonth() + 1),
                        }
                    };
                    rerender(newProps);
                    break;
                }
                case 'show-previous-month': {
                    const { anchorDate } = oldProps.datePicker;
                    const newProps: AppProps = {
                        ...oldProps,
                        datePicker: {
                            ...oldProps.datePicker,
                            anchorDate: new Date(anchorDate.getFullYear(), anchorDate.getMonth() - 1),
                        }
                    };
                    rerender(newProps);
                    break;
                }
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
                default: return broke(concern);
            }
        },
    },
}


rerender(oldProps);

function rerender(newProps: AppProps): void {
    oldProps = newProps;
    ReactDOM.render(
        <Form {...oldProps.datePicker} />,
        document.getElementById('root')
    )
}
