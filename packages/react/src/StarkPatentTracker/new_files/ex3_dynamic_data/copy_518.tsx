import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '6833e6b4-af98-4b71-ae18-74b21dc6df9d', title: 'PATENT_TITLE_4926' },
        { id: 'b87d0af5-ccca-43bb-acd3-0749ed87a121', title: 'PATENT_TITLE_9324' },
        { id: '3d966e2a-55d1-492e-9d92-fa0caa65915b', title: 'PATENT_TITLE_9051' },
        { id: '2c3461b8-91f0-470f-ac97-6634c3ab6806', title: 'PATENT_TITLE_9428' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App