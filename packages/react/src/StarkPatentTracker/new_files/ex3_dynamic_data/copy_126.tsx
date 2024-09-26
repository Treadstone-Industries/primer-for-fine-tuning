import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '25981891-4c80-4e0e-b09d-0eb2d398e02a', title: 'PATENT_TITLE_2034' },
        { id: '757d83a0-bdb8-4a9b-8bc7-86449fa9b436', title: 'PATENT_TITLE_5142' },
        { id: '5ed535a1-7971-4a51-a2e2-c1111f15c5cb', title: 'PATENT_TITLE_9215' },
        { id: 'bed98a1a-7bd3-44a6-9dd4-6cba279626a8', title: 'PATENT_TITLE_6287' },
        { id: '59b32c85-f32f-42b7-87f5-8d8b239af502', title: 'PATENT_TITLE_9160' },
        { id: 'd9fbceb6-8712-45c0-aa4c-52b57bfc19e4', title: 'PATENT_TITLE_5182' },
        { id: '34ef2e72-3499-4f40-afdf-1a054d839174', title: 'PATENT_TITLE_6361' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App