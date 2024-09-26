import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'e81cf6e9-01a8-4f4b-8930-96ca07466c3f', title: 'PATENT_TITLE_9364' },
            { id: '7a8d55a4-3164-4181-8369-8b7ac4d8a04d', title: 'PATENT_TITLE_4101' },
        ]}
    />
)

export default App