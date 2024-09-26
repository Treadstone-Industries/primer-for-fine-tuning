import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '7bdad78f-55dc-4f03-bb31-fcbe2d44e073', title: 'PATENT_TITLE_7592' },
        { id: '5ecd0ac0-e2cf-41cd-aef9-1d1606b67319', title: 'PATENT_TITLE_9132' },
        { id: 'e9c215ff-4dce-4dfb-b536-5eb9c6fba8fa', title: 'PATENT_TITLE_5730' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App