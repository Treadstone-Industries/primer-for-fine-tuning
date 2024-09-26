import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '193268c7-d05e-4c55-b206-6dc82a591530', title: 'PATENT_TITLE_4962' },
        { id: '21f80edb-3730-495a-9911-58c73c933cc6', title: 'PATENT_TITLE_7522' },
        { id: 'b690eae7-d78b-4539-8a0e-a8a5ca869c18', title: 'PATENT_TITLE_2651' },
        { id: 'a3d60b1f-6b8d-4e33-a1e6-4d0a55e916e6', title: 'PATENT_TITLE_9370' },
        { id: '30959d8a-d765-4155-87fa-631385983a2f', title: 'PATENT_TITLE_5610' },
        { id: '0a427ef0-99fc-4eab-9db9-4e6bbc087d4b', title: 'PATENT_TITLE_7303' },
        { id: 'e03af459-1cd8-46c3-bf9c-3a7eecae59ae', title: 'PATENT_TITLE_4684' },
        { id: '401f8151-394f-43a7-af21-4208be1d0395', title: 'PATENT_TITLE_2335' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App