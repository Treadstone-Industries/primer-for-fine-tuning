import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'c56d91e7-0456-47cc-b71f-28b0ba4eac84', title: 'PATENT_TITLE_4358' },
            { id: 'bac1a3ba-4858-4098-9de4-ac0b997fddd5', title: 'PATENT_TITLE_2206' },
            { id: 'd776ea57-fe78-4f87-a243-e3788f4fb76c', title: 'PATENT_TITLE_1525' },
            { id: '568280e5-422a-4dd9-ba83-7b27dc52abc3', title: 'PATENT_TITLE_7328' },
            { id: '3145117f-a47b-4d7c-98dc-9eea82891810', title: 'PATENT_TITLE_8958' },
            { id: '52e6873f-c5ff-44fd-959b-6dcaf0b35cf5', title: 'PATENT_TITLE_3317' },
            { id: '5bc7d3b1-07ca-40a6-bf8a-20767b0ae5d5', title: 'PATENT_TITLE_9085' },
            { id: '816e4495-8781-4aa8-a800-c4497a9825d0', title: 'PATENT_TITLE_3801' },
        ]}
    />
)

export default App