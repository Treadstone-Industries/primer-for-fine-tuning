import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '56802e8d-7a51-4957-8682-0080941f25a0', title: 'PATENT_TITLE_8005' },
            { id: 'b6d5b7c8-5f1b-4678-831c-364806ae3470', title: 'PATENT_TITLE_1954' },
            { id: 'a292938a-abaf-45d5-8a8b-4e0bb26d78b9', title: 'PATENT_TITLE_1121' },
            { id: '728f3dfa-1974-408f-99fe-3721900e7552', title: 'PATENT_TITLE_8472' },
            { id: '2fe14951-0f85-4c31-8ffb-c63935671457', title: 'PATENT_TITLE_8103' },
            { id: '9759a83b-9d93-4ce7-a5e9-2cbc360bc142', title: 'PATENT_TITLE_7884' },
            { id: 'a3ba1926-a9f4-4c68-8613-767670da7c15', title: 'PATENT_TITLE_9090' },
            { id: '1df05832-904b-4ab5-bd38-36c15a5a6f47', title: 'PATENT_TITLE_9322' },
            { id: 'd52437a2-1c56-452d-9cb2-8b4fafd0f0a5', title: 'PATENT_TITLE_1929' },
        ]}
    />
)

export default App