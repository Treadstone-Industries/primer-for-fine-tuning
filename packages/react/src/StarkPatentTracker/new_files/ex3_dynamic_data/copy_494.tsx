import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'e658ea90-632b-4dc1-a65e-de64b570eb35', title: 'PATENT_TITLE_3374' },
        { id: 'e3887fb9-a851-4071-9f47-70eb71ee1918', title: 'PATENT_TITLE_7859' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App