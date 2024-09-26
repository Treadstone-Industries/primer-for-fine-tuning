import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '686f9dee-349f-43f8-a24a-9bf9cd61a16e', title: 'PATENT_TITLE_4569' },
        { id: 'c65b3b45-b6a6-47ad-b8dd-6d2179a6d02b', title: 'PATENT_TITLE_6589' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App