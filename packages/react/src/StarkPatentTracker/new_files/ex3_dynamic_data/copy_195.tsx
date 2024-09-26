import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'd55a2e07-7ca7-4d1f-a6e8-ddbfb8484bdb', title: 'PATENT_TITLE_2132' },
        { id: '3324bf60-ac8b-4c16-96ab-95d4ca52c408', title: 'PATENT_TITLE_3590' },
        { id: 'c0d805e6-a660-424d-aab4-fe2a9a0d6a8d', title: 'PATENT_TITLE_9100' },
        { id: '96a187b9-849f-4195-ae4c-e2261ab8d44c', title: 'PATENT_TITLE_1063' },
        { id: 'fcac2caf-54e6-46df-874f-092411367db5', title: 'PATENT_TITLE_8329' },
        { id: 'e4ae9eca-05bc-48d1-af9c-194dabdc744e', title: 'PATENT_TITLE_7633' },
        { id: '99d4093d-c176-4cdc-ae6f-b5e4c1d706db', title: 'PATENT_TITLE_3643' },
        { id: 'a8d516fe-7b62-4c42-b68e-a0d4dc0b883d', title: 'PATENT_TITLE_9816' },
        { id: 'bc3cb403-05cd-4e02-ac75-f2325265c72a', title: 'PATENT_TITLE_3849' },
        { id: 'c325fbbd-9467-4c23-bc58-2b017f36df9b', title: 'PATENT_TITLE_7062' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App