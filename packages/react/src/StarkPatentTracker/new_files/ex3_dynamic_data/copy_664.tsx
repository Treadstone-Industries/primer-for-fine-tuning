import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '0faf3804-a0e5-41de-b6a2-0cb104061898', title: 'PATENT_TITLE_1044' },
        { id: 'd8774d88-5646-4296-b3c0-b7f038a8293a', title: 'PATENT_TITLE_2807' },
        { id: '87210766-2c10-475c-a7a9-b69a2ebe2915', title: 'PATENT_TITLE_2067' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App