import * as React from 'react';
import { monthToString } from './utils';

export type MonthViewerConcern = MonthChoiseConcern | YearChoiseConcern | PreviousMonthConcern | NextMonthConcern;

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
export interface PreviousMonthConcern {
    about: 'show-previous-month';
    month: string;
}
export interface NextMonthConcern {
    about: 'show-next-month';
    month: string;
}

export class MonthViewer extends React.Component<MonthViewerProps> {
    render() {
        const { month, year } = this.props;
        return <div className="month-viewer">
            <a className="previous-month" onClick={e => {
                e.preventDefault;
                this.props.when({ 
                    about: 'show-previous-month',
                    month
                 })
            }}></a>
            <select name="month" id="month" value={month} onChange={() =>
                this.props.when({
                    about: 'month-choise',
                    month
                })
            }>
                {
                    monthRU.map(month => {
                        return <option key={month}>{month}</option>
                    })
                }
            </select>
            <select name="year" id="year" defaultValue={year} onChange={(e) =>
                this.props.when({
                    about: 'year-choise',
                    year: e.currentTarget.value
                })
            }>
                <option id="2019">2019</option>
                <option id="2020">2020</option>
                <option id="2021">2021</option>
            </select>
            <a className="next-month" onClick={e => {
                e.preventDefault;
                this.props.when({ 
                    about: 'show-next-month',
                    month
                 })
            }}></a>
        </div>
    }
}

export const monthEn = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
    'October', 'November', 'December']
export const monthRU = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май',
    'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

