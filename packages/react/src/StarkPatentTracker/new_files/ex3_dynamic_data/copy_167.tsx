import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '1c1618e2-fa4c-4824-92bd-5a6eb1f89aa3', title: 'PATENT_TITLE_9743' },
        { id: '3fdbf41c-c577-469a-be92-dd0095b876fa', title: 'PATENT_TITLE_2444' },
        { id: 'cfbc1431-d9c7-4a9c-b760-de6c5b898490', title: 'PATENT_TITLE_9729' },
        { id: '668bd60e-9ca4-4cab-938f-f400a6d502ac', title: 'PATENT_TITLE_7447' },
        { id: 'a94ca735-a051-4089-9120-24bf988f6f24', title: 'PATENT_TITLE_9741' },
        { id: '8f5ef6a7-3c80-460d-b60a-48141a9d14bf', title: 'PATENT_TITLE_2015' },
        { id: '43d7e057-a39b-4baf-ad32-2ecfa8a86446', title: 'PATENT_TITLE_8263' },
        { id: '0d5a5181-72e9-4499-b5a0-9c650a98c31a', title: 'PATENT_TITLE_5019' },
        { id: '9b0b4eb1-0fa6-4f07-9701-b1aa81c0afda', title: 'PATENT_TITLE_3325' },
        { id: 'c04d2fd3-19d8-4d68-8464-dd00ca567af7', title: 'PATENT_TITLE_2692' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App