import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '833d5b33-335d-43e2-8551-489a008f2312', title: 'PATENT_TITLE_6090' },
            { id: 'a9429f93-4ec4-4d4b-964f-29c36e00dc57', title: 'PATENT_TITLE_3184' },
            { id: '1f4bc0f3-564d-4bc6-afa2-8cde0bcb20c7', title: 'PATENT_TITLE_5793' },
            { id: '91509e32-18fb-4d56-b903-b8a1a4dee464', title: 'PATENT_TITLE_5674' },
        ]}
    />
)

export default App