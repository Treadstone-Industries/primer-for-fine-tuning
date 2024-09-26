import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'd10b4356-39fd-4df4-9739-3f9cd5f05b7a', title: 'PATENT_TITLE_4489' },
            { id: '4cfcb1bc-c07b-4f11-b662-ea7bb652f68b', title: 'PATENT_TITLE_3985' },
            { id: '51f8a75b-08b9-415b-a340-89dd60f6c8a5', title: 'PATENT_TITLE_2038' },
        ]}
    />
)

export default App