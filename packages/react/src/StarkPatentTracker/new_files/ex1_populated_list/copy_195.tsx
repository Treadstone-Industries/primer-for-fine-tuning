import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'a55ccbb2-5cfb-472b-b5ea-4b692827dc5f', title: 'PATENT_TITLE_2003' },
            { id: 'cf6911a8-e50e-4507-b3b3-c61c333fb722', title: 'PATENT_TITLE_8918' },
        ]}
    />
)

export default App