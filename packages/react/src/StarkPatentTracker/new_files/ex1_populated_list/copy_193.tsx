import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'cb152af1-72fb-48b8-a492-8e2dc66f2a10', title: 'PATENT_TITLE_5572' },
            { id: 'd13ab626-f933-4116-b875-1151835e9d07', title: 'PATENT_TITLE_7348' },
            { id: 'df171402-1300-4444-be15-972fe216816f', title: 'PATENT_TITLE_4672' },
            { id: 'f0fc3509-80cb-47e0-b4d6-45e6d691fb61', title: 'PATENT_TITLE_6637' },
            { id: 'ffd03935-7e7d-41a2-8e27-91e61c39071e', title: 'PATENT_TITLE_8742' },
            { id: '9bf1e11e-0d7f-435f-959c-421cebb813e7', title: 'PATENT_TITLE_5735' },
        ]}
    />
)

export default App