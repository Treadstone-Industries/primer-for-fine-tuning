import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'd8960754-2b2a-475b-907f-795e0dba05d2', title: 'PATENT_TITLE_7661' },
        { id: '7e6f52d8-673d-41a9-8b58-7507c66d18c2', title: 'PATENT_TITLE_8372' },
        { id: '0f458fc5-c025-4682-ae89-e9981be45392', title: 'PATENT_TITLE_7877' },
        { id: '02b404b3-0751-4e18-b45f-0d0e101ae635', title: 'PATENT_TITLE_6578' },
        { id: 'c2cacc61-c860-41e1-b403-a3c42cc435fb', title: 'PATENT_TITLE_9333' },
        { id: '7e0e9298-b2a3-4850-bf02-28d0a3084e28', title: 'PATENT_TITLE_7395' },
        { id: '3838ec53-795d-4a29-961e-160eef6cab5d', title: 'PATENT_TITLE_3163' },
        { id: '713da79a-f3c4-4e6d-8e45-3833e044d225', title: 'PATENT_TITLE_1618' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App