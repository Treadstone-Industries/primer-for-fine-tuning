import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '6465d80d-42dd-4e24-8a09-32793329056f', title: 'PATENT_TITLE_7193' },
            { id: '7fa60cd8-741d-4361-9c0e-f4cabdba9eb3', title: 'PATENT_TITLE_6175' },
            { id: '41d44339-cfc2-4061-a22e-4dd0d2369046', title: 'PATENT_TITLE_6296' },
            { id: 'e6f83fcb-8ef8-4384-b2cc-e9ee2ffc498e', title: 'PATENT_TITLE_2368' },
        ]}
    />
)

export default App