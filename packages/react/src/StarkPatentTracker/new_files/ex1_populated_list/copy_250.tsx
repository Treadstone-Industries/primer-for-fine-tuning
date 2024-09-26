import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'e351e2c3-b4f5-4714-b198-c6373b98c879', title: 'PATENT_TITLE_3013' },
            { id: '067f1558-204f-4e0c-a980-4d670c3af7f8', title: 'PATENT_TITLE_4379' },
        ]}
    />
)

export default App