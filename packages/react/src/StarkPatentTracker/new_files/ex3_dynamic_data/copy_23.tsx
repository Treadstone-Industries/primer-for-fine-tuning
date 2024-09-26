import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '5ab26004-6af3-4464-9cbd-7f854ed72fd2', title: 'PATENT_TITLE_2463' },
        { id: 'a9de45d7-f5da-4b00-b935-38804aebb721', title: 'PATENT_TITLE_9192' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App