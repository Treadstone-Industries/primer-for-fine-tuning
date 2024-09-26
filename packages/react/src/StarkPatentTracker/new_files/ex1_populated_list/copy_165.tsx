import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '77ccc0c3-d1e5-4a63-bf8c-6f5abf4bb01c', title: 'PATENT_TITLE_5515' },
            { id: '3dbfcbd9-fded-4540-a7ad-83674f64f03d', title: 'PATENT_TITLE_8822' },
            { id: 'd0b65c7f-8e4f-4694-b0d3-f08a2f556d9e', title: 'PATENT_TITLE_8339' },
            { id: '86ebd967-9ab0-4d97-8edf-b7795624d51b', title: 'PATENT_TITLE_6455' },
            { id: 'f4f51b90-4e98-487c-9611-2519b415024e', title: 'PATENT_TITLE_7456' },
            { id: 'fe11ea0c-0762-4219-b14e-3bd5f6165c75', title: 'PATENT_TITLE_9047' },
        ]}
    />
)

export default App