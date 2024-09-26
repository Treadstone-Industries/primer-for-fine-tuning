import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '1e0c2ad3-a6c7-4d1b-8183-ec9077ef694f', title: 'PATENT_TITLE_5105' },
        { id: '5620a871-7ebe-452f-94ca-62aa69451bc2', title: 'PATENT_TITLE_9372' },
        { id: 'dadc4fec-3f95-4146-96f4-96d595f1e168', title: 'PATENT_TITLE_1243' },
        { id: '6e9f4597-0761-44e4-a6ad-3f1ba8dd42af', title: 'PATENT_TITLE_5135' },
        { id: 'a4d965e6-9b39-41d1-a1b5-22f8f60e3301', title: 'PATENT_TITLE_9292' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App