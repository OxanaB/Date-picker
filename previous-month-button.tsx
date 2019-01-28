import * as React from 'react';

export interface PreviousMonthButtonProps {
    when: (concern: PreviousMonthConcern) => void;
}

export interface PreviousMonthConcern {
    about: 'show-previous-month';
}

export class PreviousMonthButton extends React.Component<PreviousMonthButtonProps> {
    render() {
        return <a className="previous-month" onClick={e => {
            e.preventDefault;
            this.props.when({ about: 'show-previous-month' })
        }}></a>
    }
}