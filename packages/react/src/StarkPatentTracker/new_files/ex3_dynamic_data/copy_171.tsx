import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '7fbe37b0-1e65-4641-9e6d-1c98a6f1d695', title: 'PATENT_TITLE_1364' },
        { id: 'a89ee008-e104-4230-b7ec-2233dd5b0836', title: 'PATENT_TITLE_6779' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App