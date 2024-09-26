import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '150a6802-0d95-4610-9394-8a5cfc53789b', title: 'PATENT_TITLE_9810' },
            { id: 'ce503fc6-6333-4b37-8bd4-842b2e839cf1', title: 'PATENT_TITLE_9061' },
            { id: '42b402e1-ec0c-4619-b61d-001e1f3c538a', title: 'PATENT_TITLE_4226' },
            { id: '4e474f5c-abc0-4399-abb1-050c9f9d73aa', title: 'PATENT_TITLE_7574' },
        ]}
    />
)

export default App