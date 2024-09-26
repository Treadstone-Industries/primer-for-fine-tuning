import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '0a97b91f-5154-4ea0-bcc4-c06ac186dc8d', title: 'PATENT_TITLE_9015' },
        { id: '09b789cd-ac79-4e92-b5a8-ee64ca1e6749', title: 'PATENT_TITLE_2148' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App