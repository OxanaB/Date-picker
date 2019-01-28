import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DatePickerProps, DatePicker } from './date-picker';


let oldProps: DatePickerProps = {
    date: new Date(),
    isCurrentMonth: true,
    when: (concern) => {
        switch (concern.about) {
            case 'show-previous-month': {
                const newProps: DatePickerProps = {
                    ...oldProps,
                    isCurrentMonth: concern.isCurrentMonth
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
