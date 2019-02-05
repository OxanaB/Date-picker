import * as React from 'react';
import { localizer } from './language';

export type MonthViewerConcern = MonthChoiseConcern | YearChoiseConcern | PreviousMonthConcern | NextMonthConcern;

export interface MonthViewerProps {
    date: Date;
    month: string;
    year: string;
    language: string;
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
    year: string;
}
export interface NextMonthConcern {
    about: 'show-next-month';
    month: string;
    year: string;
}

export class MonthViewer extends React.Component<MonthViewerProps> {
    render() {
        const { month, year, language } = this.props;
        return <div className="month-viewer">
            <a className="previous-month" onClick={e => {
                e.preventDefault;
                this.props.when({
                    about: 'show-previous-month',
                    month,
                    year
                })
            }}></a>
            <select name="month" id="month" value={month} onChange={(e) =>
                this.props.when({
                    about: 'month-choise',
                    month: e.currentTarget.value
                })
            }><option key="emptyMonth"></option>
                {
                    localizer.useCorrectLanguage(language).months.map(month => {
                        return <option key={month}>{month}</option>
                    })
                }
            </select>
            <select name="year" id="year" value={year} onChange={(e) =>
                this.props.when({
                    about: 'year-choise',
                    year: e.currentTarget.value
                })
            }>
                <option id="2016">2016</option>
                <option id="2017">2017</option>
                <option id="2018">2018</option>
                <option id="2019">2019</option>
                <option id="2020">2020</option>
                <option id="2021">2021</option>
                <option id="2022">2022</option>
                <option id="2023">2023</option>
                <option id="2024">2024</option>
                <option id="2025">2025</option>
            </select>
            <a className="next-month" onClick={e => {
                e.preventDefault;
                this.props.when({
                    about: 'show-next-month',
                    month,
                    year
                })
            }}></a>
        </div>
    }
}
