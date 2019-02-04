import * as React from 'react';
import { monthToString } from './utils';

export type MonthViewerConcern = MonthChoiseConcern | YearChoiseConcern;

export interface MonthViewerProps {
    date: Date;
    month: string;
    year: string;
    when: (concern: MonthViewerConcern) => void;
}
export interface MonthChoiseConcern {
    about: 'month-choise';
    month: string;
}
export interface YearChoiseConcern {
    about: 'year-choise';
    year: string;
}

export class MonthViewer extends React.Component<MonthViewerProps> {
    render() {
        const year = this.props.date.getFullYear().toString();
        const monthNumber = this.props.date.getMonth();
        const monthString = monthToString(monthRU, monthNumber);
        return <>
            <div className="month-viewer">
                <select name="month" id="month" defaultValue={monthString} onChange={e =>
                    this.props.when({
                        about: 'month-choise',
                        month: e.currentTarget.value
                    })
                } >
                    {
                        monthRU.map(month => {
                            return <option key={month}>{month}</option>
                        })
                    }
                </select>
                <select name="year" id="year" defaultValue={year} onChange={e =>
                    this.props.when({
                        about: 'year-choise',
                        year: e.currentTarget.value
                    })
                }>
                    <option id="2019">2019</option>
                    <option id="2020">2020</option>
                    <option id="2021">2021</option>
                </select>
            </div>
        </>
    }
}

export const monthEn = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
    'October', 'November', 'December']
export const monthRU = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май',
    'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

