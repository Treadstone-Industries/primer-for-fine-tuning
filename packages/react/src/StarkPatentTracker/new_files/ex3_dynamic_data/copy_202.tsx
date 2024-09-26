import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '21131a45-9a2e-43e6-93e2-d21a5e66895a', title: 'PATENT_TITLE_1717' },
        { id: 'f56ff627-fb5f-4874-8d6e-e3d61c687bf3', title: 'PATENT_TITLE_3351' },
        { id: '7c4bd6e3-5b0d-4d16-9a81-d60a0a4d3e10', title: 'PATENT_TITLE_9760' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App