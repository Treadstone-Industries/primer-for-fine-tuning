import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'cfa53530-1d88-4e57-a610-9034b3d1e0c1', title: 'PATENT_TITLE_5832' },
        { id: '34354fa0-2220-4a10-9bec-78b02c7b00d1', title: 'PATENT_TITLE_5234' },
        { id: 'c35dc0d4-b7d9-4124-ba6b-3235499e3196', title: 'PATENT_TITLE_1993' },
        { id: 'd152b7ed-7032-4c4d-b980-a7a32fb97edc', title: 'PATENT_TITLE_2742' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App