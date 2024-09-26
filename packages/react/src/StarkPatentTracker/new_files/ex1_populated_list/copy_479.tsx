import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'dca195ed-c2c3-41f4-ba46-a8caeaa20657', title: 'PATENT_TITLE_1758' },
            { id: 'bb6f68a5-d323-4fd3-9f1f-8bdb95845160', title: 'PATENT_TITLE_4437' },
            { id: '60a5f6df-f9eb-4129-a776-73d91fed7f55', title: 'PATENT_TITLE_6316' },
            { id: 'e6833357-ebed-4599-a4d3-c575a6c73fb6', title: 'PATENT_TITLE_4600' },
            { id: 'e1927479-bc1e-426f-aa5b-c46b922cb808', title: 'PATENT_TITLE_4190' },
            { id: '68d433d6-6d70-4df2-9a12-c19ca073d8c1', title: 'PATENT_TITLE_7464' },
            { id: 'a27be394-ec56-40cb-8ed6-6b24dc7b50f7', title: 'PATENT_TITLE_1523' },
        ]}
    />
)

export default App