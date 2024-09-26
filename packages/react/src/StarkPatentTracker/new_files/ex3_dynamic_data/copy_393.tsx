import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '0af77b3b-b6cd-4229-93a2-6f381bb29413', title: 'PATENT_TITLE_4729' },
        { id: 'c328d646-e3e2-46b1-b505-a09b76d0a0bb', title: 'PATENT_TITLE_9259' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App