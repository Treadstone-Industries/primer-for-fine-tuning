import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '200359c4-c80d-4473-8492-523a622b5650', title: 'PATENT_TITLE_2219' },
        { id: '5a1d1faf-a635-4b22-9241-16a658e1f5d0', title: 'PATENT_TITLE_2178' },
        { id: 'cd168fb8-75db-4d66-ab44-b959bfb82eb4', title: 'PATENT_TITLE_5426' },
        { id: 'bc1a36c3-1a66-4c2c-8f0d-cdc70f2cc703', title: 'PATENT_TITLE_9694' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App