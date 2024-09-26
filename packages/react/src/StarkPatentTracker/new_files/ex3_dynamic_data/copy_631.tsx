import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '1deb795b-71e5-40ee-a600-9027a3506abc', title: 'PATENT_TITLE_3722' },
        { id: '996a1587-c797-4fb0-8476-78a25a4100c7', title: 'PATENT_TITLE_8503' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App