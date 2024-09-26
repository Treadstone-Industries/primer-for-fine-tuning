import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'cdab69a5-ee78-4e50-878f-37c311fd9105', title: 'PATENT_TITLE_9364' },
            { id: '2e4b94e6-c8c5-4e49-aa76-1421c27d235d', title: 'PATENT_TITLE_6917' },
            { id: '36bf5bb6-1866-412e-a462-d2161b9fb79c', title: 'PATENT_TITLE_2703' },
            { id: '8afac2d2-8b1d-4261-836e-67ff23ac7d4c', title: 'PATENT_TITLE_6234' },
            { id: '9f32652f-5889-4818-9918-f6bfc7059de3', title: 'PATENT_TITLE_7661' },
        ]}
    />
)

export default App