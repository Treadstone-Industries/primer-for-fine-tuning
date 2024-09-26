import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '268ee9e8-47dc-4ec2-9273-6a6f6426a83f', title: 'PATENT_TITLE_7034' },
        { id: 'e8fc49c6-d6bd-40b1-9b21-8f2eb12d2552', title: 'PATENT_TITLE_1106' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App