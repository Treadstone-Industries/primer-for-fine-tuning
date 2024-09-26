import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'bb752a8d-6c1b-4022-b4d4-195b53f46e04', title: 'PATENT_TITLE_5417' },
            { id: '0738c2f1-92b0-407f-ae90-852d34d45808', title: 'PATENT_TITLE_5099' },
            { id: '27dd3c90-ca32-45e0-bfdd-01623a84d3a6', title: 'PATENT_TITLE_6394' },
            { id: '97024348-0c9f-4f62-b49b-d78e4b04de0a', title: 'PATENT_TITLE_1811' },
            { id: '577e35fd-38f4-4833-b578-dae0b78c065d', title: 'PATENT_TITLE_1068' },
        ]}
    />
)

export default App