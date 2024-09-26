import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '6d276396-8887-468f-8021-b748f77d1879', title: 'PATENT_TITLE_2441' },
            { id: '47aeada6-3ef9-4964-8eec-c574adc07071', title: 'PATENT_TITLE_3623' },
            { id: '76e15747-62c2-4f48-8257-ffacf602309d', title: 'PATENT_TITLE_8278' },
            { id: 'aad1ff15-326b-49ea-9bc3-c431bfd2d314', title: 'PATENT_TITLE_7238' },
            { id: '3ca38c0d-86cf-42ac-adef-7fc4321d9338', title: 'PATENT_TITLE_2336' },
        ]}
    />
)

export default App