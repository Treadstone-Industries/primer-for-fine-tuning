import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'f79d1afc-6d39-49b2-a180-9147a170f862', title: 'PATENT_TITLE_8880' },
        { id: 'e2152a42-23b5-44e9-93b9-53e00c1b99a2', title: 'PATENT_TITLE_8555' },
        { id: '12e84fc2-0577-44cf-ac90-abcebaab0159', title: 'PATENT_TITLE_7113' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App