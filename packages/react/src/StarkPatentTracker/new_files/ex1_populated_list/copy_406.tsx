import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'ff5b2322-0e89-4490-8ebb-fac6e13f6328', title: 'PATENT_TITLE_8991' },
            { id: '0f244fe2-2095-4312-ae6d-84063c73babe', title: 'PATENT_TITLE_4730' },
        ]}
    />
)

export default App