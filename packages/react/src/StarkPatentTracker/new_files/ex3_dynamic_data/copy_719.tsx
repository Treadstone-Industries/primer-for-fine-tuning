import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '80df6bf7-87e5-4e52-b6be-159bfd9aff03', title: 'PATENT_TITLE_7123' },
        { id: '5bc5b032-c3e5-42a1-a6c1-9d56b233fb16', title: 'PATENT_TITLE_3649' },
        { id: '070d9937-9aed-4c01-8bcc-c7a6d1ab5161', title: 'PATENT_TITLE_2115' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App