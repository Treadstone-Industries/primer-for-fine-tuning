import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'cc603651-1210-48c6-8825-75f26ea8212d', title: 'PATENT_TITLE_7776' },
        { id: 'b6ca8b02-8a9c-4a32-9113-f3047c6d032d', title: 'PATENT_TITLE_7584' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App