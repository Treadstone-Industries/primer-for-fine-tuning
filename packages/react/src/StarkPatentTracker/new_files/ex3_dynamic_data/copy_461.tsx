import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'c0af7e93-dc38-4b5d-99e4-4ab27f7a6d0e', title: 'PATENT_TITLE_6417' },
        { id: '761bfec3-4789-476d-8cd4-d1d2af3eba41', title: 'PATENT_TITLE_9345' },
        { id: 'c44604e7-5f41-4328-b186-fb2e6ea053e4', title: 'PATENT_TITLE_4241' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App