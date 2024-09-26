import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '12901523-3015-4f01-a912-adf315e8f313', title: 'PATENT_TITLE_9119' },
            { id: '03728dc2-895f-4bb9-90d2-556d66a81ec6', title: 'PATENT_TITLE_7842' },
            { id: 'd90bb775-f8a3-42ea-84fa-81feaccf4038', title: 'PATENT_TITLE_3244' },
            { id: '23291494-cdc4-4c13-a71f-93791b60a65f', title: 'PATENT_TITLE_5104' },
            { id: '90e5d7b0-251d-47ef-bb15-549f4de7686b', title: 'PATENT_TITLE_6112' },
            { id: '4ec1db7c-67eb-4c4d-97cb-ee306309d3d1', title: 'PATENT_TITLE_3152' },
        ]}
    />
)

export default App