import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'bf70ec43-cecb-4b08-85bc-bf25aca2c471', title: 'PATENT_TITLE_5448' },
        { id: '0192939a-c1e7-439b-969e-06f319d21489', title: 'PATENT_TITLE_3502' },
        { id: '5d00c073-67e3-4265-8cd7-8a37b8961948', title: 'PATENT_TITLE_5990' },
        { id: '5cd43f24-ff2a-404a-a102-2437d47ba0d9', title: 'PATENT_TITLE_6636' },
        { id: '075d0629-5795-4b56-ba9b-5b5f67cd85a1', title: 'PATENT_TITLE_2243' },
        { id: 'a3e91d56-3ff8-4454-8efd-443dab68d0b0', title: 'PATENT_TITLE_7172' },
        { id: '5279b770-36d0-4d20-bfc4-aec254e6647e', title: 'PATENT_TITLE_6754' },
        { id: 'c1ce0cc7-2ce2-4f8b-bf8d-946c7bc2cc16', title: 'PATENT_TITLE_9226' },
        { id: 'b23e9381-e55c-4b59-9bf5-289c81b48a73', title: 'PATENT_TITLE_4353' },
        { id: 'db178e62-58c1-451e-819a-4489ee44ec4d', title: 'PATENT_TITLE_6849' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App