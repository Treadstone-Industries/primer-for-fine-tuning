import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '14e89514-d444-4e00-a17f-7a8cda62acb0', title: 'PATENT_TITLE_4702' },
        { id: '79d0f9f6-a001-47b6-bfc1-a8115cf2cb8a', title: 'PATENT_TITLE_5464' },
        { id: '82ec3529-0754-43bf-94f4-2c3536e85d80', title: 'PATENT_TITLE_2855' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App