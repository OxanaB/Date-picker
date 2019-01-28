import * as React from 'react';

export interface PreviousMonthButtonProps {
    when: (concern: PreviousConcern) => void;
}

export interface PreviousConcern {
    about: 'show-previous-month';
    isCurrentMonth: boolean;
}

export class PreviousMonthButton extends React.Component<PreviousMonthButtonProps> {
    render() {
        return <a className="previous-month" onClick={e => {
            e.preventDefault;
            this.props.when({ about: 'show-previous-month', isCurrentMonth: false })
        }}></a>
    }
}