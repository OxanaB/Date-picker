import * as React from 'react';

export interface HotelConcern {
    about: 'hotel-entered';
    hotel: string
}

export interface HotelProps {
    hotel: string;
    when: (concern: HotelConcern) => void;
}

export class Hotel extends React.Component<HotelProps> {
    render() {
        const { hotel } = this.props;
        return <>
            <label htmlFor="hotel">
                <legend>Отель</legend>
                <input type="text" value={hotel}
                    onChange={e => {
                        this.props.when({ about: 'hotel-entered', hotel: e.currentTarget.value })
                    }} />
            </label>
        </>
    }
}