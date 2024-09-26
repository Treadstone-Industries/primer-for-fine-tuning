import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '1bf7c144-a444-448b-b6d8-5d3e6e520d44', title: 'PATENT_TITLE_3293' },
            { id: 'a29d9a77-b8ec-437d-b4ef-81acabf14223', title: 'PATENT_TITLE_7079' },
            { id: 'cb788532-6d58-43c0-a9f5-1c408ca7bcd9', title: 'PATENT_TITLE_6754' },
            { id: '7a1b9d85-6443-453d-9b36-c7b2b3eea863', title: 'PATENT_TITLE_1926' },
        ]}
    />
)

export default App