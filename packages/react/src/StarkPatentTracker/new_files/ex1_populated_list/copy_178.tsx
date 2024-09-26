import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '3592d353-962b-4729-bf88-89ce7df971e8', title: 'PATENT_TITLE_9354' },
            { id: '91dad204-65cb-4e72-8f76-20d1b45a3c59', title: 'PATENT_TITLE_1552' },
        ]}
    />
)

export default App