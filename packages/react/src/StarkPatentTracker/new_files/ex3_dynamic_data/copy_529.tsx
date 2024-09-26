import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '646f075d-b7b9-4700-908e-e9e7204fdc1a', title: 'PATENT_TITLE_7839' },
        { id: '0372871a-8c16-489b-b41f-f27e46ea6b74', title: 'PATENT_TITLE_6917' },
        { id: '0cf69660-3ba7-44ab-984b-e91e497a36f5', title: 'PATENT_TITLE_6977' },
        { id: '19945a6c-f6bc-4499-9fc3-a10e5698196e', title: 'PATENT_TITLE_1455' },
        { id: '2c2f3eaf-0496-4d47-a102-5ea72d6c09c9', title: 'PATENT_TITLE_5318' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App