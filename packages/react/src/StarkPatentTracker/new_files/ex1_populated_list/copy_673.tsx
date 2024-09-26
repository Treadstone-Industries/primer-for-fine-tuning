import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '047ea4d9-bf1f-4a1c-9f66-05194ba84a2a', title: 'PATENT_TITLE_7404' },
            { id: '6ee5dd52-b7bc-49b2-a612-451749a1b0e1', title: 'PATENT_TITLE_5937' },
            { id: '5fb166bc-e0ba-4994-8fee-f9db2187d797', title: 'PATENT_TITLE_3125' },
            { id: 'ef83b6a6-186c-4295-bc4a-1978e45e0222', title: 'PATENT_TITLE_5792' },
            { id: 'a1399617-85cf-410b-a500-d0ecfc546b28', title: 'PATENT_TITLE_6065' },
            { id: 'a0f49c43-d415-4c9a-b342-188823d9967b', title: 'PATENT_TITLE_9903' },
        ]}
    />
)

export default App