import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'fb55dd1b-9943-4fca-bc54-62ebb2e3ee28', title: 'PATENT_TITLE_6291' },
        { id: '63668ac7-c25b-481a-b1f0-84f1d61fbf5c', title: 'PATENT_TITLE_5826' },
        { id: 'cd67ae46-11fe-496b-916b-dbe7cc483769', title: 'PATENT_TITLE_4536' },
        { id: '3832fdd4-ebd2-4136-adb1-c96c05eaf72f', title: 'PATENT_TITLE_4333' },
        { id: 'c8940340-bab8-4b40-a68b-50feea989a2a', title: 'PATENT_TITLE_8337' },
        { id: '3192e82a-493a-4c62-ae67-9ba2e446f2cc', title: 'PATENT_TITLE_2041' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App