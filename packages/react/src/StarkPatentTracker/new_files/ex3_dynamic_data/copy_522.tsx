import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '6c52871f-7b05-47aa-88ac-9dbd89c7232a', title: 'PATENT_TITLE_7252' },
        { id: '07093409-a558-44a3-b34c-87b75ff55712', title: 'PATENT_TITLE_1024' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App