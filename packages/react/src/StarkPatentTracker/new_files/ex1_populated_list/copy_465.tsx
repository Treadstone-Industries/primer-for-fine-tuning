import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '182f0c8e-810c-4f62-9784-ee01db6f93e2', title: 'PATENT_TITLE_4056' },
            { id: '26536b5e-ff9f-47dd-8b75-9809c816f0a6', title: 'PATENT_TITLE_5275' },
            { id: '945df487-8e45-42ba-a156-10d3bc1c8737', title: 'PATENT_TITLE_9578' },
            { id: '15afb945-961b-4f3b-aa92-1a564da6e982', title: 'PATENT_TITLE_6561' },
            { id: '46772e0b-d81a-4b45-897a-b0d6bcee3af1', title: 'PATENT_TITLE_5378' },
            { id: '22a4f2e9-54d7-4c5c-b426-af484ea5d3ab', title: 'PATENT_TITLE_6592' },
            { id: '90f3cda3-3e24-48e5-bb5f-828bfa2845c6', title: 'PATENT_TITLE_3613' },
        ]}
    />
)

export default App