import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '3b7bbdcb-fed7-470b-8513-48684461ce3d', title: 'PATENT_TITLE_2948' },
            { id: '26560fc8-6c78-4add-a6a9-ca52050c9725', title: 'PATENT_TITLE_1135' },
            { id: 'a6b488da-0745-4aad-a6b3-b6e076232776', title: 'PATENT_TITLE_7081' },
            { id: '3767338f-38d4-4f49-aa70-65ede27c64dd', title: 'PATENT_TITLE_5082' },
            { id: '85caf8bb-dc20-4a23-b3ec-41fa3514d095', title: 'PATENT_TITLE_3193' },
            { id: 'b0351318-6cab-4302-a2f5-05ea220039d5', title: 'PATENT_TITLE_9355' },
            { id: '118a9e63-1402-4df6-af2d-1190e5fcdaf9', title: 'PATENT_TITLE_4835' },
            { id: 'a68eb579-a351-4d9d-8d9b-03beb98eb1a5', title: 'PATENT_TITLE_8465' },
            { id: 'f7ad3b9f-3e33-4cb4-b4a7-66cfc23538b1', title: 'PATENT_TITLE_5998' },
        ]}
    />
)

export default App