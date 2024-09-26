import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'f869a3b6-477f-460e-a4d3-47a32970eedf', title: 'PATENT_TITLE_7448' },
            { id: '39cb400a-6701-4d21-a7a1-ac1f3ec977f5', title: 'PATENT_TITLE_7080' },
            { id: 'ea0e09c1-6bb3-4d7c-bbb2-92697659a1b6', title: 'PATENT_TITLE_7927' },
            { id: '1ed219d0-882b-4924-baaf-a23e23db3c88', title: 'PATENT_TITLE_6497' },
        ]}
    />
)

export default App