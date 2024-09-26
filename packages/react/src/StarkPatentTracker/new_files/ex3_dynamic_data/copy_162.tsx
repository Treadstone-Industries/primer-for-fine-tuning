import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '6139f693-7498-42ad-9f29-467d7c662bac', title: 'PATENT_TITLE_3200' },
        { id: 'ee16ba20-39ea-4de3-9b79-6d106f2b8bde', title: 'PATENT_TITLE_7347' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App