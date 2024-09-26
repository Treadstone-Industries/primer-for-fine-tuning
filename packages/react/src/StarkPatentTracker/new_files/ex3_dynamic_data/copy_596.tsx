import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '6bc6e77a-b587-4938-af1a-81c057fe8878', title: 'PATENT_TITLE_2639' },
        { id: '5d3dfee9-0de1-4309-8b6b-42fe2b953c7e', title: 'PATENT_TITLE_1895' },
        { id: '6ae8b3c6-e68d-4284-9294-84298f986aed', title: 'PATENT_TITLE_1169' },
        { id: 'cb0690a3-0fad-4d12-b303-db161774dc1d', title: 'PATENT_TITLE_6535' },
        { id: '2b9f3936-aa1d-4baf-86cc-b290fb586ae1', title: 'PATENT_TITLE_8574' },
        { id: 'f62ff3a3-a1f3-4844-90d1-978e19765315', title: 'PATENT_TITLE_3300' },
        { id: '08aa6767-1fa7-4a0c-ab5b-6b29a9c453f1', title: 'PATENT_TITLE_2336' },
        { id: '141b9c69-8791-4fa0-9bad-1970d00bed3e', title: 'PATENT_TITLE_2380' },
        { id: '4cbbb793-3309-4c96-814a-2401772521e7', title: 'PATENT_TITLE_5068' },
        { id: 'cc89ec8e-ac7f-4af8-828d-305ca3cfefe2', title: 'PATENT_TITLE_2727' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App