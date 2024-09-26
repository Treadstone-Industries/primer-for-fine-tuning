import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '5a980403-dea1-4bf3-850d-e3dabda251d4', title: 'PATENT_TITLE_6407' },
            { id: '50599814-2f52-4114-b7cb-1bc37a7f39eb', title: 'PATENT_TITLE_4840' },
            { id: '7fc9ad39-885a-402d-acc4-27dcecda7419', title: 'PATENT_TITLE_1489' },
            { id: '449e1d65-a748-46a1-bde5-b435eaa87dbb', title: 'PATENT_TITLE_6793' },
            { id: '99c16794-acd9-4a4c-8aaa-99f5ee2aa6c0', title: 'PATENT_TITLE_1850' },
            { id: '99e4d923-a18c-44f0-b39d-0c83980e3944', title: 'PATENT_TITLE_3125' },
        ]}
    />
)

export default App