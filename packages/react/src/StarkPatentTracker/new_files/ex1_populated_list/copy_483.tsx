import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '2a8876b8-c5e4-479b-9e35-cd460410b9c1', title: 'PATENT_TITLE_4198' },
            { id: '2ef30fc0-4c4d-42ca-9fe1-949324300bab', title: 'PATENT_TITLE_9206' },
            { id: '1eba18fd-07fc-432b-ad4e-48751f04b5f0', title: 'PATENT_TITLE_9679' },
            { id: 'c4f3b2f1-309f-421b-a3e0-388b746c2b42', title: 'PATENT_TITLE_6977' },
        ]}
    />
)

export default App