import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '491390a4-a77a-48d5-ba6b-516afadabc47', title: 'PATENT_TITLE_6428' },
            { id: '7a9bab69-e9d1-45a2-98a2-574de346b8a5', title: 'PATENT_TITLE_2914' },
            { id: '71c4cb59-74dd-4cba-ae30-f5c8ab210bff', title: 'PATENT_TITLE_9585' },
            { id: '9fcdd9f2-a63e-4dff-8df7-af186ba34ada', title: 'PATENT_TITLE_3953' },
            { id: '5720585e-5460-4bd3-bbe1-54510f344f7f', title: 'PATENT_TITLE_9980' },
        ]}
    />
)

export default App