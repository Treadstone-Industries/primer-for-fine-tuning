import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '4e820728-3f8d-427c-9abc-fcdd2b653882', title: 'PATENT_TITLE_6663' },
            { id: 'c3c1ccfb-567d-4d96-ab81-0201b4a2e54d', title: 'PATENT_TITLE_9816' },
            { id: 'babb2516-9da2-400d-be40-5406b856ab15', title: 'PATENT_TITLE_7674' },
            { id: 'b0818609-71b3-4169-bc01-c84ee0af321e', title: 'PATENT_TITLE_1912' },
            { id: 'd2696eb4-363a-46ff-8f13-a6d7c125b9d3', title: 'PATENT_TITLE_2381' },
            { id: '52883345-c32b-4f7c-9966-21fbf542c9af', title: 'PATENT_TITLE_2676' },
            { id: '413445ba-e1aa-4938-a0b5-ade6c4ed5dbe', title: 'PATENT_TITLE_1427' },
            { id: '1006073f-3e01-4221-878c-496ea40df04a', title: 'PATENT_TITLE_8152' },
            { id: '7bbadff6-9c3c-4c7a-a5bf-9ed3c6025415', title: 'PATENT_TITLE_7721' },
        ]}
    />
)

export default App