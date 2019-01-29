import * as React from 'react';

export interface MonthViewerProps {
    date: Date;
}

const monthString = [
    'January', 'February', 'March', 'April', 'May',
    'June', 'July', 'August', 'September',
    'October', 'November', 'December']

export class MonthViewer extends React.Component<MonthViewerProps> {
    render() {
        const monthNumber = this.props.date.getMonth();
        function monthToString(monthNumber: number): string  {
            const month = monthString[monthNumber]
            return month;
        }
        const month = monthToString(monthNumber);
        const year = this.props.date.getFullYear();
        return <>
            <div className="month-viewer">
                {month + ", " + year}
            </div>
        </>
    }
}
