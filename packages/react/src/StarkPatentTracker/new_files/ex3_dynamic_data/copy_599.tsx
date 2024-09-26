import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '345ab804-a088-47f7-aa92-8c780c1be119', title: 'PATENT_TITLE_6645' },
        { id: 'b46b30ea-4f01-48cd-b641-3830ab2d45ba', title: 'PATENT_TITLE_9299' },
        { id: '764b27d6-edec-44da-853e-be2c6904a423', title: 'PATENT_TITLE_2415' },
        { id: '30039cd5-55eb-47ce-8dc6-044ea8947f30', title: 'PATENT_TITLE_3100' },
        { id: 'ee0cfad0-d0a9-4fb0-8340-9eb3dc65e532', title: 'PATENT_TITLE_6870' },
        { id: '04896bf3-fb6c-4af6-a3df-0576af45f151', title: 'PATENT_TITLE_1731' },
        { id: '9d7f3cea-6883-469a-aaa3-52929e93f8d1', title: 'PATENT_TITLE_7792' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App