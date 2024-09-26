import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'f7bdc611-4270-4eb4-825d-c72eee4732e7', title: 'PATENT_TITLE_9412' },
        { id: '60d19f67-3d30-47ea-aa91-ee7cf370dabd', title: 'PATENT_TITLE_8667' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App