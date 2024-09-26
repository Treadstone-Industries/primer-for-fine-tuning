import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'c32eff25-6ad1-4ed9-b5dd-ee615fa4cc62', title: 'PATENT_TITLE_6992' },
            { id: 'c1429e59-e705-482e-b141-c5422d2898d5', title: 'PATENT_TITLE_9671' },
            { id: '26d6c600-8195-4f23-87aa-51f78c3e4f61', title: 'PATENT_TITLE_9674' },
            { id: '81e77cfc-14ab-4c8c-b28c-6e3e6b088eeb', title: 'PATENT_TITLE_6739' },
            { id: '14f5acbb-8bef-415b-932c-10bdac260ad1', title: 'PATENT_TITLE_9929' },
        ]}
    />
)

export default App