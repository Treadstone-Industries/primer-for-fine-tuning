import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '760037d2-91c6-439d-9e8c-60fdcb25966a', title: 'PATENT_TITLE_3017' },
            { id: 'a48bbfe0-4079-43e2-aa71-eb4e4832f0a7', title: 'PATENT_TITLE_9360' },
        ]}
    />
)

export default App