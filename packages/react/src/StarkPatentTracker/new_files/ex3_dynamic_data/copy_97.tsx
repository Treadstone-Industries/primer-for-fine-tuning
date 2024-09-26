import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'd90c83cc-2f61-4221-97a9-fa5a90d5925a', title: 'PATENT_TITLE_4945' },
        { id: '403be52f-d273-47cf-bf2c-86646bd5225f', title: 'PATENT_TITLE_7350' },
        { id: 'e1f4a1a5-c920-4723-8d31-00a381fa806b', title: 'PATENT_TITLE_9965' },
        { id: 'e0d4cb34-2a09-4240-ae7a-a136a062c33a', title: 'PATENT_TITLE_9006' },
        { id: '8230d354-b653-4e36-95b0-f3c37512bc88', title: 'PATENT_TITLE_3653' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App