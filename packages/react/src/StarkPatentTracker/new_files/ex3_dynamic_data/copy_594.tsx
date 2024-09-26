import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '28d26efc-a6bd-404c-a7f8-e0b02cd543c5', title: 'PATENT_TITLE_4819' },
        { id: '387a3687-5ea9-40c9-a471-edab5cb62877', title: 'PATENT_TITLE_3823' },
        { id: 'e2193684-ed7f-407a-8bff-51d646fe9eec', title: 'PATENT_TITLE_5039' },
        { id: '8bb6a9b3-e411-4484-9431-53afcd299588', title: 'PATENT_TITLE_6984' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App