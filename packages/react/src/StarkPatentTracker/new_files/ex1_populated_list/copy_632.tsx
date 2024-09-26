import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'c2a22e52-9fbb-4c99-a606-91145d178048', title: 'PATENT_TITLE_6659' },
            { id: 'f81c0b44-5b56-432d-9c5e-96320f24afa0', title: 'PATENT_TITLE_8504' },
            { id: '00e5f0e8-4c26-4af3-aed4-ea5db70b68e3', title: 'PATENT_TITLE_5675' },
        ]}
    />
)

export default App