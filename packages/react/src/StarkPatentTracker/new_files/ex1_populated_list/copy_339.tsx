import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '556ef1aa-1595-4151-a0a2-bdb9023bfa2d', title: 'PATENT_TITLE_1669' },
            { id: 'dde32c62-2618-4436-8682-21b136bc5d88', title: 'PATENT_TITLE_1230' },
            { id: 'f4d72388-40df-4530-b9e3-787c7654a1fc', title: 'PATENT_TITLE_5763' },
            { id: 'fb69cf08-9d11-4b4d-8284-b4b5020d5911', title: 'PATENT_TITLE_5316' },
        ]}
    />
)

export default App