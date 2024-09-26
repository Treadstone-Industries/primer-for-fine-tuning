import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'e8e63617-d0c1-491f-8f03-ec11c6aa0bbf', title: 'PATENT_TITLE_9407' },
            { id: 'a6fdf4a4-75ca-48d5-a0cc-0e4938317615', title: 'PATENT_TITLE_1150' },
        ]}
    />
)

export default App