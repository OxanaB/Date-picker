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
    readonly name: string;
    readonly email: string;
    readonly isEmailValid: boolean;
    readonly telephone: string;
    readonly isTelValid: boolean;
    readonly level: string; 
    readonly pickedLevels: string[];
    readonly option: string[] | null;
    readonly isOptionToShow: boolean;
    readonly pickedDate: Date | null;
    readonly anchorDate: Date;
    readonly isCalendarToShow: boolean;
    readonly hotel: string;
    readonly message: string;
    readonly newDiveRequest: DiveRequest[];
    readonly when: (concern: FormConcern) => void;
}

export class Form extends React.Component<FormProps> {
    render() {
        const {
            name, email, telephone, pickedDate, anchorDate, isOptionToShow, pickedLevels,
            isCalendarToShow, level, hotel, message, isEmailValid, isTelValid, option,
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
            telephone, isTelValid,
            when: concern => {
                this.props.when(concern);
            }
        };
        const diveLevelProps: DiveLevelProps = {
            level, option, isOptionToShow, pickedLevels,
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
        const isValid = isEmailValid && isTelValid;
        return <div className="dive-request-form">
            <form>
                <div><Name {...nameProps} /></div>
                <div><Email {...emailProps} /></div>
                <div><Telephone {...telephoneProps} /></div>
                <div><DiveLevel {...diveLevelProps} /></div>
                <div className="date-picker"><DatePicker {...datePickerProps} /></div>
                <div><Hotel {...hotelProps} /></div>
                <div><Message {...messageProps} /></div>
            </form>
            <button disabled={!isValid} onClick={e => {
                e.preventDefault();
                const newDiveRequest: DiveRequest = {
                    name,
                    email,
                    telephone,
                    diveLevel: pickedLevels,
                    arrivalDate: pickedDate,
                    hotel,
                    message
                }
                const diveRequests: DiveRequest[] = [];
                diveRequests.push(newDiveRequest);
                console.log(diveRequests);
            }}>Отправить заявку</button>
        </div>
    }
}