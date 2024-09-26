import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '9e94985b-f8d3-44e4-b52d-bea9d5730b04', title: 'PATENT_TITLE_2665' },
            { id: '1047801d-bbf6-4fc4-8c41-67713fc22bb8', title: 'PATENT_TITLE_2705' },
            { id: '27f57a58-488c-482d-b52a-3e0415d757b9', title: 'PATENT_TITLE_8188' },
            { id: '98fcf8f9-16dc-4740-b841-e781a715b819', title: 'PATENT_TITLE_5271' },
            { id: '16a16983-f76d-4eb2-b8c1-f8147379ffce', title: 'PATENT_TITLE_2944' },
            { id: '8b8b684f-bd64-4770-ab1b-e52dc1ee1a03', title: 'PATENT_TITLE_3153' },
            { id: 'fa21d861-2408-4ac1-b677-f5628c38b808', title: 'PATENT_TITLE_2439' },
            { id: '0cd44369-84c4-4e94-b67c-c90e405c3b13', title: 'PATENT_TITLE_8041' },
            { id: '7c212ba7-a4ae-48a8-9f3e-fc9c7a01361c', title: 'PATENT_TITLE_6311' },
            { id: '06515f42-fbb4-47ac-a0b4-a399885cf948', title: 'PATENT_TITLE_6513' },
        ]}
    />
)

export default App