import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'e55d6d47-0a51-444c-9c68-8cb5455d3d6e', title: 'PATENT_TITLE_7223' },
            { id: '07ce2f0a-c939-494e-989e-b7dc56c424ba', title: 'PATENT_TITLE_3318' },
        ]}
    />
)

export default App