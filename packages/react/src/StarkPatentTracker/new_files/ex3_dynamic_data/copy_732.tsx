import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '189f6185-cf15-4e39-843b-9af4f2609842', title: 'PATENT_TITLE_1724' },
        { id: 'fa9e95bf-d1f6-4b21-95d0-db424a5b9784', title: 'PATENT_TITLE_9340' },
        { id: '2b1f76b5-e3e7-4ef9-ae05-902965cf1152', title: 'PATENT_TITLE_6451' },
        { id: '03c6d2b8-57b0-42db-8a8b-a6cfea116490', title: 'PATENT_TITLE_2987' },
        { id: 'f1d58d51-b320-41c9-95e2-22038229875a', title: 'PATENT_TITLE_7620' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App