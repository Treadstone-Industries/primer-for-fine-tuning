import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '310a0c3f-9abf-441e-9b5e-e9c250e786c5', title: 'PATENT_TITLE_8371' },
        { id: '230c0bb2-4bc2-41bd-a058-ea8c40cacacc', title: 'PATENT_TITLE_7186' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App