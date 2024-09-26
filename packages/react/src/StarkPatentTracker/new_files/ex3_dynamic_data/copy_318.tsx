import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'b213b971-dbad-4662-9639-98d5892e0cf8', title: 'PATENT_TITLE_5416' },
        { id: '6ce821a0-8eea-4f89-8063-c3b57c39228e', title: 'PATENT_TITLE_4864' },
        { id: 'a3f252c2-b71f-4973-9d7c-5667b9d8bcf5', title: 'PATENT_TITLE_4179' },
        { id: '4e6ec07b-77c2-426b-bc61-202a5c020343', title: 'PATENT_TITLE_4182' },
        { id: 'e6c702dc-f76f-4057-824e-7e49c36507c8', title: 'PATENT_TITLE_8126' },
        { id: 'dd933e5e-5958-4b57-940b-f5972375f191', title: 'PATENT_TITLE_8123' },
        { id: '86f873af-63dd-4ef6-a709-c70fd1eccce8', title: 'PATENT_TITLE_3430' },
        { id: '3e5cd7c8-d619-4332-9fc1-d0cb2a42e714', title: 'PATENT_TITLE_6205' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App