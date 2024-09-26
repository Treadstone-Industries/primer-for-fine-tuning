import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '5f50689a-ae9d-460b-b1ce-8611a97ee78f', title: 'PATENT_TITLE_8027' },
            { id: '6b33654f-f671-4311-9b03-43e28e728b24', title: 'PATENT_TITLE_4904' },
            { id: '9e09c30f-4dae-4140-8a7c-37fdd663ec63', title: 'PATENT_TITLE_5812' },
            { id: '15c8e41f-c836-488b-941d-add81b061ae6', title: 'PATENT_TITLE_1749' },
        ]}
    />
)

export default App