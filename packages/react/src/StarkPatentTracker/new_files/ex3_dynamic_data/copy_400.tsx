import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'cfac7cbc-272e-43c3-8de6-c0c3cb75df17', title: 'PATENT_TITLE_1876' },
        { id: '052b5656-f084-46c8-ba45-c418b441d527', title: 'PATENT_TITLE_3214' },
        { id: 'e8972b3a-72b3-4229-bcda-7e6c7a2ca40b', title: 'PATENT_TITLE_3414' },
        { id: '81058c00-b939-4410-a72d-3d718b14274d', title: 'PATENT_TITLE_1510' },
        { id: '6f2e9671-dada-491c-8a0f-ae209c27808e', title: 'PATENT_TITLE_9050' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App