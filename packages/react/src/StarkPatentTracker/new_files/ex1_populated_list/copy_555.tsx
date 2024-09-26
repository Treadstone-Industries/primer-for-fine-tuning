import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '75668079-db33-43f2-ae05-790f15419f12', title: 'PATENT_TITLE_7660' },
            { id: 'cbd5e81d-07cf-4969-a03d-89f0f1796630', title: 'PATENT_TITLE_4676' },
            { id: '7b0ab3ef-8cf1-41ca-8c97-e12ca79f917d', title: 'PATENT_TITLE_4850' },
            { id: '9840de74-19e6-4ba3-a467-08f4b51012cd', title: 'PATENT_TITLE_3219' },
            { id: 'ac27cb2e-aeed-4a44-bfe5-d9b0ef4eb0c2', title: 'PATENT_TITLE_1755' },
            { id: '6296b143-d64f-437d-b4c4-85c38f816219', title: 'PATENT_TITLE_3821' },
        ]}
    />
)

export default App