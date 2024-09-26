import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '559c60c1-9a1c-4d69-be21-eee1e62b3463', title: 'PATENT_TITLE_9954' },
            { id: '6eb234a2-cb23-4205-a8e0-dff9555c0a65', title: 'PATENT_TITLE_4150' },
        ]}
    />
)

export default App