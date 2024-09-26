import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '1ce3e151-a7df-41ad-a6fb-d713204a2ec6', title: 'PATENT_TITLE_1740' },
            { id: '85548b6d-0a68-4d15-bdfb-6a8025e597ae', title: 'PATENT_TITLE_4150' },
        ]}
    />
)

export default App