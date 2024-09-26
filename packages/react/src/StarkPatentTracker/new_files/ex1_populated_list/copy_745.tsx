import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '7cd35781-910d-4e9a-9a49-481fe395c9f0', title: 'PATENT_TITLE_4600' },
            { id: '99467ed0-8a1e-45f5-8905-4559accba01d', title: 'PATENT_TITLE_8425' },
        ]}
    />
)

export default App