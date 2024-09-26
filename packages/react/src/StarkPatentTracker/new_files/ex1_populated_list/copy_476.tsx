import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'a8a29024-e5e8-4187-88a7-b99d56021694', title: 'PATENT_TITLE_9523' },
            { id: '8a0d6bd4-3a6f-4eaa-9728-d4af970a2fa2', title: 'PATENT_TITLE_4371' },
        ]}
    />
)

export default App