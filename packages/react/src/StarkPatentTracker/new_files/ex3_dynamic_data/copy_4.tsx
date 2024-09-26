import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'ba04b605-cbbc-4e07-96e4-5eaaae746b0d', title: 'PATENT_TITLE_6219' },
        { id: '8010bcbc-c427-4e78-a79b-212aee4b303e', title: 'PATENT_TITLE_1773' },
        { id: '09619a33-c3b8-4c29-9fe3-aa48f5475226', title: 'PATENT_TITLE_5458' },
        { id: '4a55699b-f798-498c-a992-7701567a0bfe', title: 'PATENT_TITLE_9271' },
        { id: '2b61d8c8-8300-4d67-9c45-8c8826ae94e2', title: 'PATENT_TITLE_6561' },
        { id: 'f144e612-4041-4d87-bea5-cb5d1707b5d0', title: 'PATENT_TITLE_7487' },
        { id: 'aa5b8a9a-8c5c-45d1-9d91-62bf98fcf49e', title: 'PATENT_TITLE_1663' },
        { id: '28e16189-afe0-4dae-a613-907f738aa39f', title: 'PATENT_TITLE_5826' },
        { id: '65e1f51b-d314-4a18-9a37-8c4b0130e867', title: 'PATENT_TITLE_9289' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App