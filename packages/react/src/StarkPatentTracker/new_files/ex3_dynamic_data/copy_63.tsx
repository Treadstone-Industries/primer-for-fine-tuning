import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '4c88d66d-e0e4-4000-aa17-c350bdc34cea', title: 'PATENT_TITLE_9573' },
        { id: 'b6f8765c-4afe-40b0-acf1-01e22d96346e', title: 'PATENT_TITLE_6925' },
        { id: 'c83776fa-84a9-49b3-b412-2b04f1b5def3', title: 'PATENT_TITLE_7125' },
        { id: 'ceeac61f-2e6a-48ac-82a9-f1e4b636f686', title: 'PATENT_TITLE_4849' },
        { id: '924424c6-c176-4cc5-bb64-c7761331888c', title: 'PATENT_TITLE_2167' },
        { id: '7c69ff28-269f-4f02-9415-9ee3551529ca', title: 'PATENT_TITLE_1023' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App