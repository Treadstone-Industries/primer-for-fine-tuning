import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '0becb1f2-9e01-448f-b7e0-606012b7317b', title: 'PATENT_TITLE_6285' },
        { id: '54d89e2a-605d-48f5-9e84-80386c559503', title: 'PATENT_TITLE_8703' },
        { id: 'de856d21-6e30-48a1-913f-c5b9ef6768ff', title: 'PATENT_TITLE_2084' },
        { id: '4bec81f1-6caf-46a5-b306-905043ce3eed', title: 'PATENT_TITLE_6926' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App