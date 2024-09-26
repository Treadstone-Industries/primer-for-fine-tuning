import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '4b0e6232-c73f-4e0b-b3a9-1dfa3d518df4', title: 'PATENT_TITLE_3639' },
            { id: 'aeb10eec-af9d-4e8e-ae14-11f6b6ef6a45', title: 'PATENT_TITLE_9945' },
        ]}
    />
)

export default App