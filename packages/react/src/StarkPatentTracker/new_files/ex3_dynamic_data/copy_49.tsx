import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '54fac25f-f7cc-4902-a8a4-489c78a6eea8', title: 'PATENT_TITLE_6447' },
        { id: '8829ae88-9207-4620-9e1b-6b8d08bacb9c', title: 'PATENT_TITLE_3808' },
        { id: 'f8b4031f-019b-4f7c-8d21-d3e610a2048b', title: 'PATENT_TITLE_4182' },
        { id: 'd96d2e10-7ad1-43ee-b49e-fb6d12d5be49', title: 'PATENT_TITLE_9122' },
        { id: '60128d80-eb60-4838-815a-4aae3877d1f5', title: 'PATENT_TITLE_1941' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App