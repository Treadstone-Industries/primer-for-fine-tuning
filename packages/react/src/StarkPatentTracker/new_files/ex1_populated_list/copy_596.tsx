import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '9f9f44e5-2372-4dfb-b82b-f7db9197a12b', title: 'PATENT_TITLE_9117' },
            { id: '11af0794-2440-412a-919b-12faddb2162f', title: 'PATENT_TITLE_3856' },
            { id: 'ffa2e80c-d056-4a86-85cd-8e81ba53a8bd', title: 'PATENT_TITLE_2993' },
            { id: '931f6241-f79d-490b-8dc4-1bb5ae381f58', title: 'PATENT_TITLE_5955' },
        ]}
    />
)

export default App