import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '06edf395-29d4-4c68-bbe2-3fa563b7ed10', title: 'PATENT_TITLE_4144' },
            { id: '2f5ff26b-c4fa-4584-9e47-4c2817c8c1dc', title: 'PATENT_TITLE_9894' },
            { id: 'cd1d5aee-3268-4fc5-aa60-d26637c53bb7', title: 'PATENT_TITLE_2432' },
        ]}
    />
)

export default App