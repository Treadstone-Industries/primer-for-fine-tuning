import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'cd8d7875-435f-47b2-a9b9-e2eecfd0cb79', title: 'PATENT_TITLE_4951' },
        { id: 'ddc36ce3-557b-44e1-a1a2-26b3db6d1fa6', title: 'PATENT_TITLE_5456' },
        { id: '73e372b0-aad7-47f6-a196-f92d38643cbf', title: 'PATENT_TITLE_3481' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App