import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'd6a05f3a-0989-4e3d-a15f-4ddd658eed0e', title: 'PATENT_TITLE_1742' },
            { id: 'a68d0ca8-1fe2-448d-8438-3fdb1a413c5e', title: 'PATENT_TITLE_8227' },
            { id: '47da65cc-f710-40c3-91dc-2c986692b5f2', title: 'PATENT_TITLE_2442' },
            { id: '017536fa-394a-4641-aa3e-0e53b36e7230', title: 'PATENT_TITLE_1359' },
        ]}
    />
)

export default App