import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'ffa23e53-773f-43e3-8326-72085cfc8eb0', title: 'PATENT_TITLE_4527' },
        { id: 'fb688aaf-d3c4-45e4-b2ac-8267b8bc4130', title: 'PATENT_TITLE_1846' },
        { id: '49eaceaf-733a-4cf7-b889-61cc8b0a9dbd', title: 'PATENT_TITLE_1354' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App