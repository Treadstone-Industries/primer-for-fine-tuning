import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '4752d1d6-1f01-4874-afd1-0ebb9260fb88', title: 'PATENT_TITLE_8188' },
            { id: '2946a977-854e-480a-9c68-bcd5eaeafebb', title: 'PATENT_TITLE_7587' },
            { id: 'fc7f9239-c869-4911-a372-8194b7403ebb', title: 'PATENT_TITLE_4876' },
        ]}
    />
)

export default App