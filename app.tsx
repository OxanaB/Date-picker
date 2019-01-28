import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DatePickerProps, DatePicker } from './date-picker';


let oldProps: DatePickerProps = {
    date: new Date(),
    isCurrentMonth: true,
    toShowNextMonth: false,
    toShowPreviousMonth: false,
    when: (concern) => {
        switch (concern.about) {
            case 'show-previous-month': {
                const newProps: DatePickerProps = {
                    ...oldProps,
                    date: new Date(oldProps.date.getFullYear(), oldProps.date.getMonth() - 1),
                    isCurrentMonth: concern.isCurrentMonth,
                    toShowPreviousMonth: concern.toShowPreviousMonth                    
                };
                rerender(newProps);
                break;
            };
            case 'show-next-month': {
                const newProps: DatePickerProps = {
                    ...oldProps,
                    date: new Date(oldProps.date.getFullYear(), oldProps.date.getMonth() + 1),
                    isCurrentMonth: concern.isCurrentMonth,
                    toShowNextMonth: concern.toShowNextMonth
                };
                rerender(newProps);
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
