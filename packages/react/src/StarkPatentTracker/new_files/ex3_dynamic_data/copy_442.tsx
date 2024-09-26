import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '74dfa22a-ff58-4af8-86ca-6ff659b6bce8', title: 'PATENT_TITLE_8290' },
        { id: '08f8ac62-505b-4a5f-b6e9-51c4e5d4280f', title: 'PATENT_TITLE_1186' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App