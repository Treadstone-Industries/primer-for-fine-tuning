import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '0127c8cb-6939-4aa6-b66c-065553db3586', title: 'PATENT_TITLE_6286' },
            { id: 'f7246e9e-20cf-4d92-8e22-38bd9b1bf9ac', title: 'PATENT_TITLE_2330' },
            { id: 'a4d60f22-0c68-4623-8419-fcb53eb46fee', title: 'PATENT_TITLE_7303' },
            { id: 'a0c8a54d-903c-45ef-91c6-c32ea57342ca', title: 'PATENT_TITLE_6348' },
            { id: '6db9580e-a1e9-4e05-a1a7-c048669e971e', title: 'PATENT_TITLE_6249' },
            { id: '69bf3feb-4e8a-4e59-9a6f-fcbfd7dd84f6', title: 'PATENT_TITLE_4921' },
        ]}
    />
)

export default App