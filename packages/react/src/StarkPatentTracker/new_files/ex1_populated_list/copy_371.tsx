import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '3f89602f-1927-4e43-b0d3-2b49b8c65304', title: 'PATENT_TITLE_9907' },
            { id: '3a438a57-1e2b-4e77-8106-75947d3123bb', title: 'PATENT_TITLE_7643' },
            { id: 'df505be3-eb6c-48ff-bce3-92d109454b83', title: 'PATENT_TITLE_8473' },
        ]}
    />
)

export default App