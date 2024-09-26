import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'f17e3b0b-c253-4e3c-8798-3fa41b3de46a', title: 'PATENT_TITLE_3946' },
            { id: 'f21a62bb-3072-4503-b76e-53a933ab2562', title: 'PATENT_TITLE_2378' },
        ]}
    />
)

export default App