import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '31267544-8bfa-417e-b356-fc1a89974869', title: 'PATENT_TITLE_1207' },
            { id: 'f2237fe9-c30b-4f06-98f6-8e1b563f4757', title: 'PATENT_TITLE_8185' },
            { id: 'a01be867-5670-4f12-b1bd-f4769a3634e2', title: 'PATENT_TITLE_7792' },
            { id: 'af70fd7f-a0a0-485d-86b0-80f1067b7f10', title: 'PATENT_TITLE_7288' },
        ]}
    />
)

export default App