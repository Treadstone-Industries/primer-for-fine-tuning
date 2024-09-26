import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '3431949f-d5ec-47d6-98a6-46438d659972', title: 'PATENT_TITLE_9591' },
            { id: 'c2218157-4432-4d9d-bd36-885eff921047', title: 'PATENT_TITLE_4791' },
            { id: '72c42caa-12cc-45a0-bb45-58cec6e3301c', title: 'PATENT_TITLE_6787' },
        ]}
    />
)

export default App