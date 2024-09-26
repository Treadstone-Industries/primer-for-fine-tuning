import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'b94b155a-4f87-4328-8530-9e4a5f494344', title: 'PATENT_TITLE_3278' },
        { id: '44707f0f-ee38-447a-97e7-62aad28b5f99', title: 'PATENT_TITLE_4042' },
        { id: 'c2fbdcf9-1246-4fb2-b599-54a848b5bf75', title: 'PATENT_TITLE_4152' },
        { id: 'f7aa036d-952f-4aac-964d-c3043f439583', title: 'PATENT_TITLE_3859' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App