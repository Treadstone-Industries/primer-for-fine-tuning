import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'f74a5a41-8dd3-4293-b8fa-fb9c7ff52675', title: 'PATENT_TITLE_2907' },
            { id: 'cb4ae1e1-c073-493b-a7a0-795f39671156', title: 'PATENT_TITLE_1623' },
        ]}
    />
)

export default App