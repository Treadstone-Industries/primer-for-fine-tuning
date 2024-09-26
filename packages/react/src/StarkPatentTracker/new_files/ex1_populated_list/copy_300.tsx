import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '6f1e64c7-cc96-4cf4-bcbf-5b4980c37825', title: 'PATENT_TITLE_9341' },
            { id: '33521bcd-dba4-46c3-9a26-6826a9b19bd7', title: 'PATENT_TITLE_8059' },
            { id: 'e649f6b0-39f8-44ca-a164-6510deeb28bf', title: 'PATENT_TITLE_8970' },
        ]}
    />
)

export default App