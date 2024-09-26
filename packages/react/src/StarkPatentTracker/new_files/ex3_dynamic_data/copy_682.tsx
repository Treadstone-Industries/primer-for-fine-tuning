import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '6dbed12a-3af7-4c33-b1bd-4c0ef0791f47', title: 'PATENT_TITLE_1513' },
        { id: '553959f6-691a-4c51-b9fa-7b37afb2574e', title: 'PATENT_TITLE_3668' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App