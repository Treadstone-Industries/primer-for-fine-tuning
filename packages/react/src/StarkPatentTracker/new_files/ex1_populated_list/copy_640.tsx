import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'c3ad948c-a7d8-478b-82e0-6bfa4fe0ad00', title: 'PATENT_TITLE_9445' },
            { id: '8674f34c-9e22-471c-b5d7-427ef2ab8058', title: 'PATENT_TITLE_9904' },
        ]}
    />
)

export default App