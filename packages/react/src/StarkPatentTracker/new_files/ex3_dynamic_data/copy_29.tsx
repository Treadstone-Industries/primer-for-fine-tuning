import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '16eec3fd-b061-4cfc-8def-39f8cfae6e7f', title: 'PATENT_TITLE_8818' },
        { id: 'b1cccb39-25b4-4e77-85e4-4baaf9305c9f', title: 'PATENT_TITLE_4540' },
        { id: '3cea848a-bb76-46c0-9ba3-cfaf00a443aa', title: 'PATENT_TITLE_9437' },
        { id: '76d0879e-5637-48b8-a35d-1d3e34bbfd14', title: 'PATENT_TITLE_1819' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App