import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '3b7d25c4-832d-48ee-9156-d5c6b4116176', title: 'PATENT_TITLE_7382' },
            { id: '81228956-bb25-4c23-9d4d-80fdb043347b', title: 'PATENT_TITLE_1227' },
        ]}
    />
)

export default App