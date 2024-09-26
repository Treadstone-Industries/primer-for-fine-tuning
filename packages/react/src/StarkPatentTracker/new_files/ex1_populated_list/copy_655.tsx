import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '9a5241ee-273f-40c2-a0a4-38f0ee1eb653', title: 'PATENT_TITLE_6122' },
            { id: 'e91dbb59-1037-49bf-a210-95567263f608', title: 'PATENT_TITLE_7736' },
            { id: '22d5f6c8-62a0-4e79-9e32-87c2f1cae2eb', title: 'PATENT_TITLE_3429' },
            { id: '8a092742-0e61-4dda-a76a-2e21b5cb9cc7', title: 'PATENT_TITLE_8059' },
            { id: '924f829c-381f-4508-966a-6a003eabc0dd', title: 'PATENT_TITLE_6070' },
        ]}
    />
)

export default App