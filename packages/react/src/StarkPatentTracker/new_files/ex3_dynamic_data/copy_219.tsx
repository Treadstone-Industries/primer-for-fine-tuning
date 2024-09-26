import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '7d49db3f-8c5c-4bd1-8cd8-5f03d5a9732d', title: 'PATENT_TITLE_3266' },
        { id: '53922a64-7655-423c-8a6c-b0948fb19c77', title: 'PATENT_TITLE_3912' },
        { id: '80ba8803-b91d-4fa1-bd2e-3dc193d33f26', title: 'PATENT_TITLE_8208' },
        { id: '651496f6-20bb-4303-be9d-ab2da61d495b', title: 'PATENT_TITLE_9308' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App