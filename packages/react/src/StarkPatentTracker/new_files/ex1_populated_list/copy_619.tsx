import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '8e912432-da2b-4059-8995-cbd7cac26da9', title: 'PATENT_TITLE_8110' },
            { id: 'cf582c49-8973-46e2-9f44-dcf20299aea3', title: 'PATENT_TITLE_1287' },
            { id: 'ddaac967-f988-46c0-a4e6-67ad39f2e2b1', title: 'PATENT_TITLE_2648' },
            { id: 'f930ef54-a623-4e04-bfb6-4ec20446b722', title: 'PATENT_TITLE_4402' },
            { id: '9ccffc81-e24b-4093-8590-9d63daaae244', title: 'PATENT_TITLE_3005' },
            { id: 'c159ff00-eb01-4ec0-88e3-2e444064d05c', title: 'PATENT_TITLE_2790' },
        ]}
    />
)

export default App