import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '4a7418b0-94ae-43f1-9566-9c054ddd339c', title: 'PATENT_TITLE_7838' },
        { id: 'c6c99272-fc36-42be-8be7-3d7aac3ba081', title: 'PATENT_TITLE_4420' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App