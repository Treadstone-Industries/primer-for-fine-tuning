import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'd9deace5-cd2a-417d-a8c5-c16d2448baa1', title: 'PATENT_TITLE_1185' },
            { id: 'a2ad8c6e-7cf6-4fe0-b5fa-01fb18d7483d', title: 'PATENT_TITLE_2758' },
            { id: '952f9f42-04c1-4fab-80b0-74067f3b4cd1', title: 'PATENT_TITLE_4993' },
            { id: '06117b1d-b646-4d58-a416-2fd38a0da1e5', title: 'PATENT_TITLE_4477' },
            { id: '55de75f8-15a1-40c7-982d-301952b1364d', title: 'PATENT_TITLE_4330' },
            { id: 'fd47903c-6f1e-4db9-8e73-1ddd982426c0', title: 'PATENT_TITLE_5600' },
        ]}
    />
)

export default App