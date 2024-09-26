import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '9a41163a-4670-47f8-a96f-7615972f50c8', title: 'PATENT_TITLE_1676' },
            { id: '85b6fb83-bd8c-48f3-a763-501ad6eec38e', title: 'PATENT_TITLE_7926' },
        ]}
    />
)

export default App