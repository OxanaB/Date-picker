import * as React from 'react';

export interface HotelConcern {
    about: 'hotel-input';
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
            <label>
                <div>Отель</div>
                <div><input type="text" value={hotel}
                    onChange={e => {
                        this.props.when({ about: 'hotel-input', hotel: e.currentTarget.value })
                    }} /></div>
            </label>
        </>
    }
}