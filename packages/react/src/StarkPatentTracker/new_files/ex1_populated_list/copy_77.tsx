import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '4a861a57-f2b0-440c-8c80-8e7ba572223b', title: 'PATENT_TITLE_5588' },
            { id: '6e2a7647-74a9-41d2-bff8-1e88d7f12f6a', title: 'PATENT_TITLE_1669' },
            { id: '82c638f2-4702-4997-9d30-11d27ecfd0ca', title: 'PATENT_TITLE_2952' },
        ]}
    />
)

export default App