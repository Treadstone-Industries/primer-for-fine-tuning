import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'b691f341-b738-4e80-bdba-014c1b5d8745', title: 'PATENT_TITLE_8867' },
        { id: 'c50a4074-dc2e-4ec0-9bc5-d6980ee4bee3', title: 'PATENT_TITLE_5291' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App