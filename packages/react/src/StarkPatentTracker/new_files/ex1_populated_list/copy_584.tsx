import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '499aa063-d0e4-4783-8407-bdb99bc12a27', title: 'PATENT_TITLE_5842' },
            { id: '8ed99291-f073-4898-9454-c36e0a57fdfa', title: 'PATENT_TITLE_3723' },
        ]}
    />
)

export default App