import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '028e2159-b84e-4fcd-9412-727a68276365', title: 'PATENT_TITLE_5633' },
            { id: 'e79b3fad-c3d1-4ebf-b41a-65d5753f8611', title: 'PATENT_TITLE_2502' },
        ]}
    />
)

export default App