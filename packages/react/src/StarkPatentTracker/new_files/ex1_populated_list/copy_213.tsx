import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '93f42fc6-52ec-46ab-9d59-9822b18d5ceb', title: 'PATENT_TITLE_8757' },
            { id: 'c99f4bfd-8adc-4797-a270-6fe895a885cf', title: 'PATENT_TITLE_9845' },
            { id: '37b25ada-919b-4c6d-b2db-021eb743f556', title: 'PATENT_TITLE_1769' },
        ]}
    />
)

export default App