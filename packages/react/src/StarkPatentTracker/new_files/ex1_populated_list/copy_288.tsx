import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '535e8a3a-ee37-47be-8c7a-d6f26ab88d17', title: 'PATENT_TITLE_9944' },
            { id: '15ae8c3f-3c53-4429-b101-0c927ab3f0f9', title: 'PATENT_TITLE_5469' },
            { id: '2be4f2b2-4d10-42a5-876d-52cf68438945', title: 'PATENT_TITLE_1719' },
        ]}
    />
)

export default App