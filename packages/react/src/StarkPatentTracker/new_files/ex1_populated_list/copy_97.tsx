import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '72d0ebf9-329a-4c3b-9114-ff22795f86da', title: 'PATENT_TITLE_2332' },
            { id: 'd1a44930-ea9c-4bfe-964a-637c36d9b5d0', title: 'PATENT_TITLE_1670' },
            { id: '215400e7-c24d-4ef7-9ce0-ba78e34ee961', title: 'PATENT_TITLE_7693' },
            { id: '5279ab90-9040-4090-a1ff-b10ae76b8b3b', title: 'PATENT_TITLE_2797' },
        ]}
    />
)

export default App