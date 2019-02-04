import * as React from 'react';
import { Name, NameProps, NameConcern } from './name';
import { DiveLevel, DiveLevelConcern, DiveLevelProps } from './dive-level';
import { DatePicker, DatePickerProps, DatePickerConcern } from './date-picker';
import { Hotel, HotelConcern, HotelProps } from './hotel';
import { Message, MessageConcern, MessageProps } from './message';
import { DiveRequest } from './dive-requests';
import { Field, FielderConcern, Fielder } from './field';

export type FormConcern =
    | NameConcern
    | { about: 'email', email: FielderConcern }
    | { about: 'telephone', telephone: FielderConcern }
    | DiveLevelConcern
    | DatePickerConcern
    | HotelConcern
    | MessageConcern;


export interface FormProps {
    readonly name: string;
    readonly email: Field;
    readonly telephone: Field;
    readonly level: string;
    readonly pickedLevels: string[];
    readonly option: string[] | null;
    readonly isOptionToShow: boolean;
    readonly pickedDate: Date | null;
    readonly month: string;
    readonly year: string;
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
            isCalendarToShow, level, hotel, message, option, month, year,
        } = this.props;
        const nameProps: NameProps = {
            name,
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
            month,
            year,
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
        const isValid = email.isValid && telephone.isValid;
        return <div className="dive-request-form">
            <form>
                <div><Name {...nameProps} /></div>
                <div>
                    <label>
                        <div>E-mail</div>
                        <div className="wrapper-input-icon">
                            <Fielder
                                field={email}
                                when={concern => this.props.when({ about: 'email', email: concern })}
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fillOpacity=".9" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
                                <path fill="none" d="M0 0h24v24H0z" /></svg>
                        </div>
                    </label>
                </div>
                <div>
                    <label>
                        <div>Номер телефона</div>
                        <div className="wrapper-input-icon">
                            <Fielder
                                field={telephone}
                                when={concern => this.props.when({ about: 'telephone', telephone: concern })}
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                <path d="M0 0h24v24H0z" fill="none" /></svg>
                        </div>
                    </label>
                </div>
                <div><DiveLevel {...diveLevelProps} /></div>
                <div className="date-picker"><DatePicker {...datePickerProps} /></div>
                <div><Hotel {...hotelProps} /></div>
                <div><Message {...messageProps} /></div>
            </form>
            <button disabled={!isValid} onClick={e => {
                e.preventDefault();
                const newDiveRequest: DiveRequest = {
                    name,
                    email: email.value,
                    telephone: telephone.value,
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
