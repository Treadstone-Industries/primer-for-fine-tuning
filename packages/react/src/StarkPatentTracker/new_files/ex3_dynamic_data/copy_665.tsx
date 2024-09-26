import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'db845c5d-f765-405c-a5dd-36d4217084c6', title: 'PATENT_TITLE_5354' },
        { id: 'c3915285-3b5a-49cb-b43d-8eef6a987b43', title: 'PATENT_TITLE_1841' },
        { id: '7f0c4adb-312c-4f80-94d3-e572c2fcfe1a', title: 'PATENT_TITLE_6104' },
        { id: '283c5e7a-b872-49a2-9917-fadf61c3fdbf', title: 'PATENT_TITLE_1290' },
        { id: '354613b8-b547-4625-81d7-3842bb0b42fd', title: 'PATENT_TITLE_5024' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App