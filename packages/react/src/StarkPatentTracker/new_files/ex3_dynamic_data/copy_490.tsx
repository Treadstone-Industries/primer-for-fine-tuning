import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '97a426d2-a536-427a-b552-32c720c51e61', title: 'PATENT_TITLE_5188' },
        { id: '204f993b-b91e-4582-b133-a94317b73c37', title: 'PATENT_TITLE_9508' },
        { id: 'b1462155-49f8-4bda-9529-66f44872db57', title: 'PATENT_TITLE_8311' },
        { id: '1af1652e-7602-43ae-9cf7-f5f14a4a8498', title: 'PATENT_TITLE_8473' },
        { id: '29700992-d799-4efd-be48-6553b0a3bc3f', title: 'PATENT_TITLE_5167' },
        { id: '005ac59b-efd7-4132-942f-8ff8e3a38bc3', title: 'PATENT_TITLE_7286' },
        { id: '4b9f7112-99ad-4f3a-a056-408d8a64a2fe', title: 'PATENT_TITLE_5081' },
        { id: 'f1828a5c-e169-44dc-8e23-131221933105', title: 'PATENT_TITLE_5720' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App