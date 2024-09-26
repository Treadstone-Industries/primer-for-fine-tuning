import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'aaf01be3-edbb-4f82-b3b9-7480bf5ac7f0', title: 'PATENT_TITLE_5482' },
        { id: 'ab3d9c4a-905c-4a08-93ca-3140773742ea', title: 'PATENT_TITLE_6041' },
        { id: '1885bd2f-6053-4dec-891c-45c8642a77b8', title: 'PATENT_TITLE_1205' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App