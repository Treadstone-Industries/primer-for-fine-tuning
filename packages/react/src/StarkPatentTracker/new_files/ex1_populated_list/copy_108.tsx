import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '7c3eaab5-3caf-4fbe-a177-83fc7943950f', title: 'PATENT_TITLE_7410' },
            { id: '16291398-0983-4ece-b463-0f25f09dee8d', title: 'PATENT_TITLE_4290' },
            { id: '714564b3-8cd8-48d2-83e1-a1a5b465c9f0', title: 'PATENT_TITLE_1371' },
        ]}
    />
)

export default App