import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '8a95e047-055a-40f3-bc2c-f0e976c93ef4', title: 'PATENT_TITLE_9522' },
        { id: 'c5bacf88-fc08-47bb-8405-47cc4f8467b6', title: 'PATENT_TITLE_5090' },
        { id: '96bce1d2-a8bc-4a78-b18c-112ad3304038', title: 'PATENT_TITLE_8386' },
        { id: '53797240-80dd-4994-8995-7413b1a16525', title: 'PATENT_TITLE_4943' },
        { id: '53978189-50d2-4aeb-a9fc-a17a2dc61a84', title: 'PATENT_TITLE_4221' },
        { id: '92b6f389-c608-48a0-9f46-36f968577c14', title: 'PATENT_TITLE_1854' },
        { id: '72010ea4-9e5c-4437-930f-23c7cc5e1a80', title: 'PATENT_TITLE_7265' },
        { id: 'e0c66d54-174d-4d98-a48b-d7ebd94716d7', title: 'PATENT_TITLE_6655' },
        { id: '35b881af-668e-4249-afc2-193eb2f2710c', title: 'PATENT_TITLE_8516' },
        { id: '839233cb-0c53-4ae0-85a5-07159337b7d5', title: 'PATENT_TITLE_4146' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App