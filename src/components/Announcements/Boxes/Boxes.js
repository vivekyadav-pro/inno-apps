import React, { Component } from 'react'

import Banner from '../../Banner/Banner'
import Box from './Box/Box'
import './Boxes.css'

export class Boxes extends Component {
    state = [
        {
            id: 1,
            title: 'We will be closed on the coming Monday due to Govt orders',
            date: '23-May-2020 5pm'
        },
        {
            id: 2,
            title: 'Modi govt makes U-turn on Rs 4L ex-gratia for coronavirus deaths',
            date: '26-May-2020 5pm'
        },
        {
            id: 3,
            title: 'The government released a revised notification where it deleted the clause on ex-gratia and cost of hospitalisation for all coronavirus patients',
            date: '27-May-2020 5pm'
        },
        {
            id: 4,
            title: '85% DU students don’t want online open book exams, survey by teachers’ body finds',
            date: '28-May-2020 5pm'
        },
        {
            id: 5,
            title: 'Modi govt finally clarifies it’s not paying Shramik Express fare, says states footing bill',
            date: '28-May-2020 8pm'
        }
    ]

    render() {
        const boxes = this.state.map(boxes => (
            <Box
                key={boxes.id}
                title={boxes.title}
                date={boxes.date} />
        ));
        return (
            <div className="boxes">
            <Banner>
                <h3>All Announcements</h3>
            </Banner>
            {boxes}
        </div>
        )
    }
}

export default Boxes

