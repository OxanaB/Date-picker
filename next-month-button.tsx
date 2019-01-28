import * as React from 'react';

export interface NextMonthButtonProps {
    when: (concern: NextMonthConcern) => void;
}

export interface NextMonthConcern {
    about: 'show-next-month';
}

export class NextMonthButton extends React.Component<NextMonthButtonProps> {
    render() {
        return <a className="next-month" onClick={e => {
            e.preventDefault;
            this.props.when({ about: 'show-next-month'})
        }}></a>
    }
}