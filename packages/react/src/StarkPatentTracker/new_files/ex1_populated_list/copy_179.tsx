import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '07a67548-fcaf-4e4a-9f21-87295104fe8e', title: 'PATENT_TITLE_2581' },
            { id: '06e7d21c-1e1f-4607-91d9-35162db01f09', title: 'PATENT_TITLE_4590' },
            { id: '43da0944-0a88-47d2-81b0-0f05b8fa38fc', title: 'PATENT_TITLE_2349' },
            { id: '9076f906-787e-4265-8791-26eb1767f2d9', title: 'PATENT_TITLE_5962' },
        ]}
    />
)

export default App