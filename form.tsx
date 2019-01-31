import * as React from 'react';
import { Name, NameProps, NameConcern } from './name';
import { Email, EmailConcern, EmailProps } from './email';
import { Telephone, TelephoneConcern, TelephoneProps } from './tel';
import { DiveLevel, DiveLevelConcern, DiveLevelProps } from './dive-level';
import { DatePicker, DatePickerProps, DatePickerConcern } from './date-picker';
import { Hotel, HotelConcern, HotelProps } from './hotel';
import { Message, MessageConcern, MessageProps } from './message';
import { DiveRequest } from './dive-requests';

type FormConcern = NameConcern | EmailConcern | TelephoneConcern | DiveLevelConcern | DatePickerConcern | HotelConcern | MessageConcern;

export interface FormProps {
    newDiveRequest: DiveRequest[];
    when: (concern: FormConcern) => void;
}

export class Form extends React.Component<FormProps> {
    render() {
        const nameProps: NameProps = {
            name,
            when: concern => {
                this.props.when(concern);
            }
        };
        const emailProps: EmailProps = {
            email,
            when: concern => {
                this.props.when(concern);
            }
        }
        const telephoneProps: TelephoneProps = {
            telephone,
            when: concern => {
                this.props.when(concern);
            }
        };
        const diveLevelProps: DiveLevelProps = {
            level,
            when: concern => {
                this.props.when(concern);
            }
        };
        const datePickerProps: DatePickerProps = {
            pickedDate,
            anchorDate,
            isCalendarToShow,
            when: concern => {
                this.props.when(concern);
            }
        };
        const hotelProps: HotelProps = {
            hotel,
            when: concern => {
                this.props.when(concern);
            }
        };
        const messageProps: MessageProps = {
            message,
            when: concern => {
                this.props.when(concern);
            }
        };
        return <form>
            <Name {...nameProps} />
            <Email {...emailProps} />
            <Telephone {...telephoneProps} />
            <DiveLevel {...diveLevelProps} />
            <label htmlFor="arrivalDate">Дата приезда:
                <DatePicker {...datePickerProps} />
            </label>
            <Hotel {...hotelProps} />
            <Message {...messageProps} />
            <button type="Submit" onClick={e => {
                e.preventDefault;
                const newDiveRequest: DiveRequest[] = [{
                    name: nameProps.name,
                    email: emailProps.email,
                    telephone: telephoneProps.telephone,
                    diveLevel: diveLevelProps.level,
                    arrivalDate: datePickerProps.pickedDate,
                    hotel: hotelProps.hotel,
                    message: messageProps.message   
                }]
                newDiveRequest.push();
            }}>Отправить заявку</button>
        </form>
    }
}