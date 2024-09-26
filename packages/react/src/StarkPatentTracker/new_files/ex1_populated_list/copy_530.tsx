import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '440e1d14-0d4c-41a9-b961-acd40bef55db', title: 'PATENT_TITLE_6559' },
            { id: '84e5b732-ab35-48a9-9fa0-3a082529c7d4', title: 'PATENT_TITLE_3432' },
            { id: '730c9c43-160f-4867-ad88-3a693b60eaa8', title: 'PATENT_TITLE_3046' },
        ]}
    />
)

export default App