import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '6bc9c06a-7a4f-4149-97e4-cfbbaa81df43', title: 'PATENT_TITLE_2685' },
            { id: '7fa78785-bc2c-44b5-97d9-bf7ad75d1708', title: 'PATENT_TITLE_5992' },
            { id: '57b2192a-c5e8-46c2-ae28-c47646ace85a', title: 'PATENT_TITLE_5949' },
            { id: 'cd2202e4-970f-45a8-89c7-268f1334d94b', title: 'PATENT_TITLE_9769' },
            { id: '2f52b8dc-a056-470d-b2df-08aa00b913eb', title: 'PATENT_TITLE_3011' },
            { id: '67ab3065-307c-478f-819b-586e154790ca', title: 'PATENT_TITLE_4419' },
        ]}
    />
)

export default App