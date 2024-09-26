import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '72da1009-7eed-4edd-bcea-891202e8b0ff', title: 'PATENT_TITLE_8870' },
            { id: 'dc77238b-b23b-4342-9709-fcf46befb362', title: 'PATENT_TITLE_2305' },
            { id: '2e54b348-d8a2-40ca-92e8-c35baad84d3f', title: 'PATENT_TITLE_2409' },
            { id: '32774c99-4609-4981-917e-abf335342622', title: 'PATENT_TITLE_7023' },
            { id: 'f68e475b-3930-4e6e-a97b-1227e6d25fc2', title: 'PATENT_TITLE_7105' },
            { id: '89c3b8e8-158b-4d77-9c9c-0e61650aed08', title: 'PATENT_TITLE_2321' },
            { id: 'f465419a-41d1-4d6a-82ff-86e46b72658d', title: 'PATENT_TITLE_2689' },
        ]}
    />
)

export default App