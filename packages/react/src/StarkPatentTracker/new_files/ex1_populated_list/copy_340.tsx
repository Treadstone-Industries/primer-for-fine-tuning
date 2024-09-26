import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'fb7b4b99-08eb-45d4-8928-cc0d2221fe7a', title: 'PATENT_TITLE_7847' },
            { id: '4b49a337-742f-4e91-990f-7c213208bc76', title: 'PATENT_TITLE_5374' },
            { id: '739628f8-2798-45d2-90f9-9566129f09ba', title: 'PATENT_TITLE_7247' },
            { id: '5bead175-fc50-4bd0-8a76-ee287f20b36d', title: 'PATENT_TITLE_7283' },
            { id: '1e4fed0f-cf62-4c84-92ea-b10a9fc503aa', title: 'PATENT_TITLE_8580' },
            { id: 'c5f4c80e-08c6-49b7-89fd-ddad604f357c', title: 'PATENT_TITLE_2995' },
            { id: '8c124eac-7d53-4aff-910a-b9e07a850dc6', title: 'PATENT_TITLE_9324' },
            { id: '1d79c528-1bb5-4f1b-8935-6e5dc714859b', title: 'PATENT_TITLE_5289' },
            { id: '85e76906-281a-4711-af96-39f6a72db95d', title: 'PATENT_TITLE_3935' },
        ]}
    />
)

export default App