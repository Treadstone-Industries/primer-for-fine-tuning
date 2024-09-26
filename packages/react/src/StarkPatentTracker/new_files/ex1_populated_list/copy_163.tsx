import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '0d3a5166-e1da-47b8-941f-d8da6315a855', title: 'PATENT_TITLE_9262' },
            { id: 'be1ceeaa-500c-4e60-8a82-874c29c466d7', title: 'PATENT_TITLE_4036' },
        ]}
    />
)

export default App