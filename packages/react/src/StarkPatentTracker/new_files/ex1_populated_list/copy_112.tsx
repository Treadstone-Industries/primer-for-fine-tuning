import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '4d3ecfec-f842-447e-86f5-d1898adccaf4', title: 'PATENT_TITLE_2188' },
            { id: '9798d6b8-fb67-4d06-b693-ad61b088dea3', title: 'PATENT_TITLE_6070' },
        ]}
    />
)

export default App