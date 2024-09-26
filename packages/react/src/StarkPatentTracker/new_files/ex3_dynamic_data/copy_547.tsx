import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'd0ab0fd5-b9cf-4155-9243-ba5dcfd0d747', title: 'PATENT_TITLE_5872' },
        { id: 'd1c77b28-3f58-4150-8d41-3a6d9cbf865d', title: 'PATENT_TITLE_5894' },
        { id: '24a1220d-359f-4e3f-a6f6-b0ecb62ec341', title: 'PATENT_TITLE_3360' },
        { id: '2eb1e80c-8f5a-4e27-b9a3-c5647058ee4f', title: 'PATENT_TITLE_4594' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App