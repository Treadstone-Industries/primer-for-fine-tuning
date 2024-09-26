import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'cd4be8ca-9093-4991-8a61-1fa44de60223', title: 'PATENT_TITLE_7026' },
        { id: '4aa10095-184d-474d-9b00-94559c93b2a3', title: 'PATENT_TITLE_1116' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App