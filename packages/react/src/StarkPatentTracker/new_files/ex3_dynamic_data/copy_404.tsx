import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '0834ae0f-ff79-48b0-ae52-f8226ee14611', title: 'PATENT_TITLE_5596' },
        { id: 'e0fc5969-bf7c-4718-b789-6e7dfce02b66', title: 'PATENT_TITLE_8415' },
        { id: '7fe6c6a8-c13d-446f-b6fc-a9748d7a0838', title: 'PATENT_TITLE_1190' },
        { id: '6f7836c4-1544-4a01-adf9-b249e8311d87', title: 'PATENT_TITLE_4114' },
        { id: '71586860-948f-44f9-8274-838b2c0a7b8b', title: 'PATENT_TITLE_9281' },
        { id: 'c8c0a133-2fef-4c97-be6d-b6fddcf461ba', title: 'PATENT_TITLE_7819' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App