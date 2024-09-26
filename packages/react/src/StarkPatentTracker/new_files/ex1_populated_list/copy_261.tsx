import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '1d4ae997-d346-4d2b-a9cf-b2c5e78623e7', title: 'PATENT_TITLE_1114' },
            { id: 'db9489e6-ad6e-448a-a77e-4feb621de531', title: 'PATENT_TITLE_8329' },
        ]}
    />
)

export default App