import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '39cbccc0-372c-4cfa-83b5-3ba334f9bcd8', title: 'PATENT_TITLE_9577' },
        { id: '98a0522d-bcbe-425a-b5ed-ab62ec6e929a', title: 'PATENT_TITLE_4068' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App