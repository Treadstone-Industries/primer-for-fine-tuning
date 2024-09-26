import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '66b4977a-0ac8-4cd2-9aa2-211c8194d3eb', title: 'PATENT_TITLE_4333' },
        { id: 'dc516d48-77cb-4ddd-bb61-2a288d7b583b', title: 'PATENT_TITLE_9401' },
        { id: 'dee91091-ae28-45d5-9698-b4cd0c6f9d9a', title: 'PATENT_TITLE_5656' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App