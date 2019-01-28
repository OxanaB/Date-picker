import * as React from 'react';

export interface PreviousMonthButtonProps {
    when: (concern: PreviousMonthConcern) => void;
}

export interface PreviousMonthConcern {
    about: 'show-previous-month';
    isCurrentMonth: boolean;
    toShowPreviousMonth: boolean,
}

export class PreviousMonthButton extends React.Component<PreviousMonthButtonProps> {
    render() {
        return <a className="previous-month" onClick={e => {
            e.preventDefault;
            this.props.when({ about: 'show-previous-month', isCurrentMonth: false, toShowPreviousMonth: true })
        }}></a>
    }
}