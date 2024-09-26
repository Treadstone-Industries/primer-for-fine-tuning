import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '6a61dc88-d446-4235-9596-07bc47976751', title: 'PATENT_TITLE_7545' },
        { id: '5b5c2025-a4fe-48f4-b0e1-c9937ac24481', title: 'PATENT_TITLE_7276' },
        { id: '5f1e8949-b4e0-4987-b1e0-7d50c0250fc5', title: 'PATENT_TITLE_8055' },
        { id: '7496f795-b156-485d-a52d-806c8790e97f', title: 'PATENT_TITLE_4030' },
        { id: 'c92c035d-b5f0-48cb-96af-95d076508f80', title: 'PATENT_TITLE_3615' },
        { id: '8b767851-bbbb-483f-8055-a5ff250df5a8', title: 'PATENT_TITLE_2315' },
        { id: 'a6c3d8bf-abc5-4974-9092-3ab6cceaa3b6', title: 'PATENT_TITLE_8979' },
        { id: 'd194cd91-9cad-4af9-9651-552984a44024', title: 'PATENT_TITLE_4154' },
        { id: '455764f9-1856-44c1-96b8-b26db708478b', title: 'PATENT_TITLE_5294' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App