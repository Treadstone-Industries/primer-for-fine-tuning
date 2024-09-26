import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'fa26736e-7c9f-40ea-bd31-ed69aafc2bad', title: 'PATENT_TITLE_4959' },
        { id: 'adca7a84-bd36-4b3d-a9db-ef891b0480f3', title: 'PATENT_TITLE_5684' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App