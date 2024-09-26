import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '5c5e2f6c-16a4-4707-a7c0-6d40c9616985', title: 'PATENT_TITLE_3932' },
        { id: 'a530a35d-f23d-42ea-8296-1405db72fe17', title: 'PATENT_TITLE_9070' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App