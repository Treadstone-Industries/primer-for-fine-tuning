import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '8fcdb22a-6f2d-4c16-a2e1-1a466f0b3956', title: 'PATENT_TITLE_3779' },
        { id: '5d86049e-c8f4-47ef-b492-acadae89e9a3', title: 'PATENT_TITLE_9630' },
        { id: 'f6b78026-3145-44b6-86f5-9879986d5f4e', title: 'PATENT_TITLE_6966' },
        { id: '4d698edf-26c4-4883-8300-49d84e5a2bfb', title: 'PATENT_TITLE_9867' },
        { id: '8b1c7fba-fff9-4c5b-86fa-7004144cf5f8', title: 'PATENT_TITLE_6299' },
        { id: 'c03ed39d-31b8-4e18-ba4e-9274327f8d7b', title: 'PATENT_TITLE_3627' },
        { id: 'c197e854-f408-4fa7-a6a9-f48967ac9c17', title: 'PATENT_TITLE_7887' },
        { id: 'a2a9d9af-4416-49b2-9da5-053563adf8ef', title: 'PATENT_TITLE_7346' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App