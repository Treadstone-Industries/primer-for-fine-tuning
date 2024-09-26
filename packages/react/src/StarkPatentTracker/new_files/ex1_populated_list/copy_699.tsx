import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '2881dbf7-157b-4e9a-9095-738435580213', title: 'PATENT_TITLE_7842' },
            { id: '3a9f271c-e10c-41ca-98ba-d6675adddfda', title: 'PATENT_TITLE_3777' },
        ]}
    />
)

export default App