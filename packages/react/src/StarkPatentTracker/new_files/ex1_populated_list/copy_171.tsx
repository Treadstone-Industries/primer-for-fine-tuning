import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'fe306b65-1e29-4c9b-a0d3-12bf54fab7e3', title: 'PATENT_TITLE_9218' },
            { id: '7c1db0f2-7764-474d-ad40-afac573f7547', title: 'PATENT_TITLE_1065' },
            { id: '0c28ec9d-e4f0-4247-a43d-0ed6e47c47e3', title: 'PATENT_TITLE_9021' },
        ]}
    />
)

export default App