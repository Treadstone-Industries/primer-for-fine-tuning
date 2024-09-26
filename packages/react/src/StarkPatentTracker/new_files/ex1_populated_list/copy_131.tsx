import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '9b2a2b35-fbac-4d26-b80a-94eab6e4b7e5', title: 'PATENT_TITLE_6328' },
            { id: 'dd584ea0-74a0-400e-aefe-7e2a05ecc3ca', title: 'PATENT_TITLE_6863' },
        ]}
    />
)

export default App