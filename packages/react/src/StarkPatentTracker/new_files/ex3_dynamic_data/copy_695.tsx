import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'c67e9f36-c4be-4c34-b45a-a8e20c1744e6', title: 'PATENT_TITLE_6600' },
        { id: '5be99316-84be-4bd9-ac2c-1e95918f5e8a', title: 'PATENT_TITLE_5166' },
        { id: 'dfc09619-d450-4854-a0b9-54dcdce894f9', title: 'PATENT_TITLE_5760' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App