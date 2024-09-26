import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'ae0ffac1-5837-4a24-8096-22f3cb1b5088', title: 'PATENT_TITLE_9440' },
            { id: '7a71d599-c042-4d20-bb0c-aaa04d3c4595', title: 'PATENT_TITLE_4928' },
            { id: '07b9b4d4-c59b-4454-94c7-b1f61c9496e2', title: 'PATENT_TITLE_8378' },
            { id: 'd04dc98a-79e8-4681-b8e3-79cbc168926f', title: 'PATENT_TITLE_1850' },
            { id: '4af06d3f-daa6-44bc-adba-af9428f73cff', title: 'PATENT_TITLE_3196' },
            { id: '44b47d8f-6963-483f-ae53-42ec5354671f', title: 'PATENT_TITLE_3788' },
            { id: 'c8314ef5-020d-48bb-a31d-b88a4aede5ab', title: 'PATENT_TITLE_6571' },
            { id: 'd4d7f42b-989e-4231-a7fa-8be787be1a89', title: 'PATENT_TITLE_1633' },
            { id: '8e5c1ee2-423b-4048-9508-3cf516fa5f3b', title: 'PATENT_TITLE_8805' },
        ]}
    />
)

export default App