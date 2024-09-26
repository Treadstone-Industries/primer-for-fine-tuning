import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'ed89d0ca-5cf0-423a-b095-ffee234bcbe7', title: 'PATENT_TITLE_6961' },
        { id: '659aa5c7-80fe-4cbc-a097-99d7cade2082', title: 'PATENT_TITLE_9641' },
        { id: 'b821b19c-af44-4f46-b3b8-fad6d98bd9b6', title: 'PATENT_TITLE_6220' },
        { id: 'c4aa5a1e-2dc5-4942-81e4-ec1cfa9b7518', title: 'PATENT_TITLE_8869' },
        { id: 'd7ca0574-4ea5-4af4-86f5-408af63ebe24', title: 'PATENT_TITLE_8970' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App