import * as React from 'react';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export class GridCapture extends React.Component {
    render() {
        return <thead>
            <tr>
            {
                days.map((day) => {
                    return <td key={day.toString()}> {day}
                    </td>;
                })
            }
            </tr>
        </thead>
    }
}