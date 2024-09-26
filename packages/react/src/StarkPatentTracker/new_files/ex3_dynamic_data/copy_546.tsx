import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'f5506403-f0a7-4bb6-a660-633127b2754e', title: 'PATENT_TITLE_7016' },
        { id: '5a30ff66-969b-46ba-850e-3a98bed854c8', title: 'PATENT_TITLE_8555' },
        { id: 'cc36c7da-f5da-4c83-a9da-b37a29070220', title: 'PATENT_TITLE_2638' },
        { id: '1a65616f-52e4-4322-8c2b-d8a80f53c173', title: 'PATENT_TITLE_5836' },
        { id: 'e49a9737-c472-42f5-975e-dc95679eff6f', title: 'PATENT_TITLE_8097' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App