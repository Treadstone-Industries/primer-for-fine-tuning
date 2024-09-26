import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '7441c835-76f7-44a5-9347-237f2108b616', title: 'PATENT_TITLE_8443' },
        { id: '27e6fe0d-e4e4-46a1-abec-6f4c06c17606', title: 'PATENT_TITLE_3909' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App