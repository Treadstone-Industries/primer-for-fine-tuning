import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'd87523e1-94b8-4b00-a233-35a54552f88f', title: 'PATENT_TITLE_4909' },
            { id: '8acddd57-2d88-4af0-89b5-a0b246031567', title: 'PATENT_TITLE_9916' },
            { id: '1ff26ae9-870e-4e46-a898-e50ec96d9228', title: 'PATENT_TITLE_2214' },
            { id: 'bb8d5220-de4c-41ba-813b-ce6c8bbbae98', title: 'PATENT_TITLE_4004' },
            { id: '59ba1601-227a-401a-906e-cdc4be83ae93', title: 'PATENT_TITLE_1671' },
        ]}
    />
)

export default App