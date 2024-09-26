import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'f446c5be-64d3-45c5-9fc1-437ea1dd3ddc', title: 'PATENT_TITLE_6988' },
        { id: 'd8cf01f5-1322-407a-b6b0-36b6966b43e6', title: 'PATENT_TITLE_6097' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App