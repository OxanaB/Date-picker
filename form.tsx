import * as React from 'react';
import { Name, NameProps, NameConcern } from './name';
import { Email, EmailConcern, EmailProps } from './email';
import { Telephone, TelephoneConcern, TelephoneProps } from './tel';
import { DiveLevel, DiveLevelConcern, DiveLevelProps } from './dive-level';
import { DatePicker, DatePickerProps, DatePickerConcern } from './date-picker';
import { Hotel, HotelConcern, HotelProps } from './hotel';
import { Message, MessageConcern, MessageProps } from './message';
import { DiveRequest } from './dive-requests';

export type FormConcern = NameConcern | EmailConcern | TelephoneConcern | DiveLevelConcern | DatePickerConcern | HotelConcern | MessageConcern;

export interface FormProps {
    name: string;
    email: string;
    isEmailValid: boolean;
    telephone: string;
    level: string;
    pickedDate: Date | null;
    anchorDate: Date;
    isCalendarToShow: boolean;
    hotel: string;
    message: string;
    newDiveRequest: DiveRequest[];
    when: (concern: FormConcern) => void;
}

export class Form extends React.Component<FormProps> {
    render() {
        const {
            name, email, telephone, pickedDate, anchorDate,
            isCalendarToShow, level, hotel, message, isEmailValid,
        } = this.props;
        const nameProps: NameProps = {
            name,
            when: concern => {
                this.props.when(concern);
            }
        };
        const emailProps: EmailProps = {
            email, isEmailValid,
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
        const isValid = isEmailValid;
        return <>
            <form>
                <Name {...nameProps} />
                <Email {...emailProps} />
                <Telephone {...telephoneProps} />
                <DiveLevel {...diveLevelProps} />
                <DatePicker {...datePickerProps} />
                <Hotel {...hotelProps} />
                <Message {...messageProps} />
            </form>
            <button disabled={!isValid} onClick={e => {
                e.preventDefault();
                const newDiveRequest: DiveRequest = {
                    name,
                    email,
                    telephone,
                    diveLevel: level,
                    arrivalDate: pickedDate,
                    hotel,
                    message
                }
                const diveRequests: DiveRequest[] = [];
                diveRequests.push(newDiveRequest);
                console.log(diveRequests);
            }}>Отправить заявку</button>
        </>
    }
}