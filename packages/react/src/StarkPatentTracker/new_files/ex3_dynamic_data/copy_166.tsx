import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '2787df99-6c97-4fff-8fe8-87d8080f350d', title: 'PATENT_TITLE_2873' },
        { id: '81a631af-6c43-4014-9733-262712d63e9c', title: 'PATENT_TITLE_3387' },
        { id: '19a57cb3-c883-417f-8b1f-a706560f9f0f', title: 'PATENT_TITLE_1696' },
        { id: '5ad178b5-23ba-49cf-9cbf-71c03e964294', title: 'PATENT_TITLE_4403' },
        { id: '0c086f85-f3ad-47e7-a943-dae5bcce1174', title: 'PATENT_TITLE_1078' },
        { id: 'f1143e11-c3c6-48e5-bd44-f7c7b93bd689', title: 'PATENT_TITLE_4989' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App