import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '6d6fe785-bf35-4e9e-af43-01935ae09059', title: 'PATENT_TITLE_2991' },
            { id: '09fc2dc8-d2b5-412e-a1ce-cbe8cda3ebf5', title: 'PATENT_TITLE_6119' },
            { id: '712d52d6-5c3b-4de3-8c8d-38763535404e', title: 'PATENT_TITLE_4454' },
            { id: '21d1880f-c3ff-4c47-943e-fcdb2773e72f', title: 'PATENT_TITLE_5461' },
        ]}
    />
)

export default App