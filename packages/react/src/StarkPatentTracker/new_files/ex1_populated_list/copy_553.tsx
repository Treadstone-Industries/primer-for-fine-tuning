import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'fcd0891a-0e1a-443e-85c7-82f6d46e42b2', title: 'PATENT_TITLE_2259' },
            { id: 'c7dd7a98-82c1-47b0-ad3b-4e88cb605d32', title: 'PATENT_TITLE_3276' },
            { id: 'f248fe56-205a-470a-be7e-fe9aac115b9c', title: 'PATENT_TITLE_8517' },
            { id: '4338d048-0034-485c-a61b-4da5467c4d4d', title: 'PATENT_TITLE_5172' },
            { id: '7f5cf925-2860-4488-8502-82a06f2ba988', title: 'PATENT_TITLE_2025' },
            { id: 'dd00d20f-850f-4b9a-9da6-93c8c7151dce', title: 'PATENT_TITLE_2650' },
            { id: 'ebbf088c-30d8-4d30-82a8-3bc37274af5f', title: 'PATENT_TITLE_2236' },
            { id: 'ff0da599-12d7-4c2e-bec3-1774c745b234', title: 'PATENT_TITLE_5624' },
        ]}
    />
)

export default App