import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '1406fb3d-f31a-4216-b5c5-f48169d0dd29', title: 'PATENT_TITLE_4955' },
            { id: '99972793-0727-4adc-aa32-e554298d825b', title: 'PATENT_TITLE_4475' },
        ]}
    />
)

export default App