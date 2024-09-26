import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'c93437e0-3c91-4d53-abc5-44312b5dbcc3', title: 'PATENT_TITLE_4177' },
        { id: '1ed70070-3991-47ab-9d28-658f22fe775e', title: 'PATENT_TITLE_8291' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App