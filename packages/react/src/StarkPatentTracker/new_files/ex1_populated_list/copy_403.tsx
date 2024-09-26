import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'e847862f-ba52-4811-9cb1-8c1d8df5ffbe', title: 'PATENT_TITLE_9097' },
            { id: 'd246026e-bb79-4da7-a65b-50a150f8533f', title: 'PATENT_TITLE_4131' },
            { id: '22bbfa3e-4365-43c5-b290-b95a0a4ed60d', title: 'PATENT_TITLE_9922' },
        ]}
    />
)

export default App