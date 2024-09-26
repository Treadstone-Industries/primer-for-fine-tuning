import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'b95f3f44-3afa-431f-9914-f05f9214b8c9', title: 'PATENT_TITLE_6248' },
            { id: '779dc7ac-e254-462e-965c-3b10941ad8f5', title: 'PATENT_TITLE_9590' },
            { id: 'e7bdf497-444a-44fe-b0f4-da6b9df9458a', title: 'PATENT_TITLE_4525' },
        ]}
    />
)

export default App