import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '6895c3dc-5367-4d86-aeeb-d29146bb4c12', title: 'PATENT_TITLE_2752' },
            { id: '62bd033d-4797-44b5-b7eb-e0ea2eadf3f0', title: 'PATENT_TITLE_5087' },
            { id: 'af3d8505-f9dd-4e8a-9f85-e62528cd6fcd', title: 'PATENT_TITLE_6108' },
            { id: 'f14ce4d6-7755-470f-b4b8-e5fa571e0559', title: 'PATENT_TITLE_7731' },
            { id: '1f5a737b-5ec0-418b-ae78-1fe12a6c126b', title: 'PATENT_TITLE_4940' },
        ]}
    />
)

export default App