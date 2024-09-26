import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'af6756aa-aafc-4445-9331-03d6d58714bf', title: 'PATENT_TITLE_1956' },
            { id: '40177f8d-e8c3-460b-951d-9141884e14ee', title: 'PATENT_TITLE_7984' },
            { id: '68c0e221-5927-48f6-a583-d4e6dd36f57d', title: 'PATENT_TITLE_3887' },
            { id: '592509da-c318-4516-9907-9c46115681eb', title: 'PATENT_TITLE_3078' },
            { id: '8f227f37-7329-481c-a617-6af462ae5a95', title: 'PATENT_TITLE_9744' },
        ]}
    />
)

export default App