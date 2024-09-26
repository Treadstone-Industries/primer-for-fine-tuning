import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'd6570173-043e-4c4f-8ce2-ae2e5e77e7c7', title: 'PATENT_TITLE_9650' },
            { id: '5dbcac96-c688-4362-9915-07eb249e4bf9', title: 'PATENT_TITLE_9493' },
            { id: '8c91d225-edda-4adf-8b56-a3fb038f24fd', title: 'PATENT_TITLE_8208' },
            { id: 'c4208765-45d7-4e8d-b1ea-acb9080c13e4', title: 'PATENT_TITLE_7482' },
        ]}
    />
)

export default App