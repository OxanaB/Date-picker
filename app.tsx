import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DatePickerProps, DatePicker } from './date-picker';


let oldProps: DatePickerProps = {
    date: new Date(),
    when: (concern) => {
        switch (concern.about) {
            case 'show-previous-month': {
                const newProps: DatePickerProps = {
                    ...oldProps,
                    date: new Date(oldProps.date.getFullYear(), oldProps.date.getMonth() - 1),
                };
                rerender(newProps);
                break;
            };
            case 'show-next-month': {
                const newProps: DatePickerProps = {
                    ...oldProps,
                    date: new Date(oldProps.date.getFullYear(), oldProps.date.getMonth() + 1),
                };
                rerender(newProps);
                break;
            };
            case 'date-is-picked': {
                const { pickedDate } = concern;
                console.log(pickedDate);
                break;
            }
        }
    }

}
rerender(oldProps);

function rerender(newProps: DatePickerProps): void {
    oldProps = newProps;
    ReactDOM.render(
        <DatePicker {...oldProps} />,
        document.getElementById('root')
    )
}
