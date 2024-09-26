import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'daebbf11-1412-4eb2-81e0-91fa685a6eb2', title: 'PATENT_TITLE_9661' },
            { id: 'cb22332a-6402-4740-bfdc-5ddf6ec4000f', title: 'PATENT_TITLE_8892' },
            { id: '7b6af184-8eea-4c77-94fd-f44990c66065', title: 'PATENT_TITLE_3613' },
            { id: '1b129427-e32e-4e85-af3e-9a848896d76d', title: 'PATENT_TITLE_6859' },
        ]}
    />
)

export default App