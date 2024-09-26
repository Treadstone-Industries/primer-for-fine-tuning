import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'ca4bc492-c316-4eb8-ba8f-d89f457136a6', title: 'PATENT_TITLE_8742' },
        { id: '59cd6a83-5b29-4b1e-a3aa-a25089f8d52b', title: 'PATENT_TITLE_6443' },
        { id: '3ca74b56-43e8-4426-b254-f17c73fb21d3', title: 'PATENT_TITLE_2047' },
        { id: '579b36ac-e23f-4fa5-8144-6e42a7d022e6', title: 'PATENT_TITLE_5699' },
        { id: 'd88b9e0c-52b2-4950-a47c-68d7f80b0c7a', title: 'PATENT_TITLE_8266' },
        { id: 'bbea6f70-df98-41d8-8800-627a92fc8841', title: 'PATENT_TITLE_9644' },
        { id: '9d32c008-e7d1-41c6-a514-2e24bd9fd3cf', title: 'PATENT_TITLE_8407' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App