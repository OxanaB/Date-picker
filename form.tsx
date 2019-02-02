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
            isCalendarToShow, level, hotel, message, option,
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
                        <div>
                            <Fielder
                                field={email}
                                when={concern => this.props.when({ about: 'email', email: concern })}
                            />
                        </div>
                    </label>
                </div>
                <div>
                    <label>
                        <div>Номер телефона</div>
                        <div>
                            <Fielder
                                field={telephone}
                                when={concern => this.props.when({ about: 'telephone', telephone: concern })}
                            />
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