import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '43163d4d-2fc1-4c64-81a1-8b361cf911a8', title: 'PATENT_TITLE_4039' },
            { id: '89e90f53-c945-4fa6-ab0b-90dde7f5a600', title: 'PATENT_TITLE_5596' },
        ]}
    />
)

export default App