import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '44812fd4-f7dc-46c3-a41b-d9a7cd8f81a2', title: 'PATENT_TITLE_7292' },
            { id: '09a38b8a-8a5a-4a92-bafd-cba0a9282b20', title: 'PATENT_TITLE_3098' },
            { id: '1abcf319-27d8-4328-a1ac-2b1459711568', title: 'PATENT_TITLE_9696' },
            { id: '23f6fb0b-bff5-46a6-84fd-8e4443955975', title: 'PATENT_TITLE_6791' },
            { id: '22f2e498-5441-4f92-a0c6-3bf8e4083883', title: 'PATENT_TITLE_1070' },
            { id: '61e0eaf5-22ae-443c-9d73-84cfbfa00b9d', title: 'PATENT_TITLE_2676' },
            { id: 'd3dbca10-091b-48a0-87b5-7c79a788d03d', title: 'PATENT_TITLE_5815' },
        ]}
    />
)

export default App