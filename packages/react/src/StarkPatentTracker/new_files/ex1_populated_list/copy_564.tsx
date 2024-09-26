import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'afc6e291-3a70-42f1-b8d3-5fb206524d48', title: 'PATENT_TITLE_3683' },
            { id: 'ed09877e-6ded-41a6-90e5-a39599b4bcb7', title: 'PATENT_TITLE_9044' },
        ]}
    />
)

export default App