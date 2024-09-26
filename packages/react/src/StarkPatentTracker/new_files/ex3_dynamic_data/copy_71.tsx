import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'a1c2e7d3-26c4-434b-89c8-dea11bfef661', title: 'PATENT_TITLE_4717' },
        { id: '4ae0a6d2-6953-4c9b-b3a0-6974017e922f', title: 'PATENT_TITLE_5257' },
        { id: 'd801666e-269b-4602-949c-b2e5edfd2cfe', title: 'PATENT_TITLE_4145' },
        { id: 'f1b68460-0847-4879-92a3-7e58c19590bd', title: 'PATENT_TITLE_9283' },
        { id: '0e7c8038-abc6-49b0-9b50-18e3444b18d2', title: 'PATENT_TITLE_6315' },
        { id: 'e97446c8-9f26-4a08-bd05-ae9d8c13b764', title: 'PATENT_TITLE_7028' },
        { id: 'aeaf52fc-86d8-4674-b8a5-b03a974fec03', title: 'PATENT_TITLE_3607' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App