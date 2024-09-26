import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'e7567063-fac5-479f-96d9-7202e575b5f1', title: 'PATENT_TITLE_9989' },
            { id: '863bba36-8d10-496b-986a-7aae8995854b', title: 'PATENT_TITLE_8601' },
            { id: 'a0c96166-2947-4591-b332-7506badcb666', title: 'PATENT_TITLE_5762' },
            { id: '0e5a6d5e-4b7f-4c0a-ac7d-06cb7b77bd98', title: 'PATENT_TITLE_3567' },
            { id: '775242f8-a4f6-40df-8c41-06d6901f306a', title: 'PATENT_TITLE_8426' },
            { id: '93d5dc2a-8a42-490a-bb33-b79f6243785d', title: 'PATENT_TITLE_6665' },
        ]}
    />
)

export default App