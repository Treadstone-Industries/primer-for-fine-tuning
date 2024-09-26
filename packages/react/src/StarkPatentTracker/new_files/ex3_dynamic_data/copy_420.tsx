import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '6c042d17-03f1-478d-81a3-5b5b869793a7', title: 'PATENT_TITLE_9967' },
        { id: '6909a360-ee7c-436e-8554-9ec0bb0b77dd', title: 'PATENT_TITLE_5500' },
        { id: 'f31360c2-a50c-4ecb-93aa-8f7179fd2136', title: 'PATENT_TITLE_5488' },
        { id: '50c7c8be-676e-4e3e-b581-3acb4b0ac05f', title: 'PATENT_TITLE_7333' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App