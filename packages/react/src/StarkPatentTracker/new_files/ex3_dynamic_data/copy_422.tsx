import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '15ef14ea-db5c-4613-aa41-15036ab1db5a', title: 'PATENT_TITLE_3751' },
        { id: '97ef2b4a-1ce8-45bb-a76e-5ebcda118b8d', title: 'PATENT_TITLE_3292' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App