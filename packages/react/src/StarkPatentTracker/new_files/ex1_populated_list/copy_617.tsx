import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '1976a548-b199-423d-983b-708392cbe296', title: 'PATENT_TITLE_7472' },
            { id: 'fabd2a77-47aa-4ed0-8dd7-0a36ac8e8ca7', title: 'PATENT_TITLE_6935' },
            { id: '1cd6c2f2-6550-4c57-8b1c-5523f76ef940', title: 'PATENT_TITLE_1926' },
        ]}
    />
)

export default App