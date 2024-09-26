import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'b7a66d53-b37e-4c57-87d3-aa299ff8aa63', title: 'PATENT_TITLE_3613' },
            { id: '38355e6d-6d12-4ca2-ba17-af048490012c', title: 'PATENT_TITLE_6571' },
            { id: '19d613b0-5f28-4e8b-b406-f3a01c072d82', title: 'PATENT_TITLE_8565' },
            { id: '53e33834-cf81-4ec6-a6f3-f0cfaa3f6126', title: 'PATENT_TITLE_7264' },
            { id: 'dfce7f24-f0e5-407c-b4c4-f856af856bf9', title: 'PATENT_TITLE_8495' },
            { id: 'cc30b7fc-8cb1-4d05-8be5-1e2e026f1401', title: 'PATENT_TITLE_9341' },
            { id: '4e76fca3-71a8-40e9-88f0-e714af770e4c', title: 'PATENT_TITLE_2840' },
            { id: 'f665c12d-2c7d-494c-bb51-ea5e14ee908b', title: 'PATENT_TITLE_3553' },
        ]}
    />
)

export default App