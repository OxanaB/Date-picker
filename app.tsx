import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Form, FormProps, FormConcern } from './form';
import { diveRequests } from './dive-requests';


let oldProps: FormProps = {
    name: '',
    email: '',
    telephone: '',
    level: '',
    pickedDate: null,
    anchorDate: new Date,
    isCalendarToShow: false,
    hotel: '',
    message: '',
    when: (concern: FormConcern) => {
        switch (concern.about) {
            case 'name-entered': {
                const newProps: FormProps = {
                    ...oldProps,
                    name: concern.name
                };
                rerender(newProps);
                break;
            };
            case 'email-entered': {
                const newProps: FormProps = {
                    ...oldProps,
                    email: concern.email
                };
                rerender(newProps);
                break;
            };
            case 'telephone-entered': {
                const newProps: FormProps = {
                    ...oldProps,
                    telephone: concern.telephone
                };
                rerender(newProps);
                break;
            };
            case 'level-entered': {
                const newProps: FormProps = {
                    ...oldProps,
                    level: concern.level
                };
                rerender(newProps);
                break;
            };
            case 'hotel-entered': {
                const newProps: FormProps = {
                    ...oldProps,
                    hotel: concern.hotel
                };
                rerender(newProps);
                break;
            };
            case 'message-entered': {
                const newProps: FormProps = {
                    ...oldProps,
                    message: concern.message
                };
                rerender(newProps);
                break;
            };
            case 'show-calendar': {
                const newProps: FormProps = {
                    ...oldProps,
                    isCalendarToShow: concern.isCalendarToShow
                };
                rerender(newProps);
                break;
            };
            case 'show-next-month': {
                const date = oldProps.anchorDate;
                const newProps: FormProps = {
                    ...oldProps,
                    anchorDate: new Date(date.getFullYear(), date.getMonth() + 1)
                }
                rerender(newProps);
                break;
            };
            case 'show-previous-month': {
                const date = oldProps.anchorDate; 
                const newProps: FormProps = {
                    ...oldProps,
                    anchorDate: new Date(date.getFullYear(), date.getMonth() - 1)
                };
                rerender(newProps);
                break;
            };
            case 'date-is-picked': {
                const newProps: FormProps = {
                    ...oldProps,
                    pickedDate: concern.pickedDate,
                    isCalendarToShow: false
                };
                rerender(newProps);
                break;
            }
            

        }

    },
    newDiveRequest: diveRequests,
}



rerender(oldProps);

function rerender(newProps: FormProps): void {
    oldProps = newProps;
    ReactDOM.render(
        <Form {...oldProps} />,
        document.getElementById('root')
    )
}

