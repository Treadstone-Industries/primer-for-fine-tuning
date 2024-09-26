import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '3a59855c-be8c-49f7-b303-c87d7458b4c3', title: 'PATENT_TITLE_6487' },
            { id: '7a11aa30-ec75-402c-8477-cb86db9f638c', title: 'PATENT_TITLE_2368' },
            { id: 'c3b97620-062b-45d9-b4e1-7aba3e8ec368', title: 'PATENT_TITLE_2075' },
            { id: '3fd7a262-7214-41da-9ce6-f186a961569a', title: 'PATENT_TITLE_2302' },
            { id: 'c6f0a8f5-eecf-417a-92fe-b5cc753b1527', title: 'PATENT_TITLE_1745' },
        ]}
    />
)

export default App