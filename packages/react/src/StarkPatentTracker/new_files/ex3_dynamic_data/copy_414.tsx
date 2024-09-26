import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'b6cb4b98-b3bb-4caf-a786-1f8831d5b423', title: 'PATENT_TITLE_8669' },
        { id: 'f25c5ca9-bb69-4eff-8e53-a7200bfe2795', title: 'PATENT_TITLE_5533' },
        { id: 'fcd59260-7f58-4ea5-9a02-b813b323f63f', title: 'PATENT_TITLE_6892' },
        { id: '49f4ae39-8d4b-424b-b68f-7e5ec9839747', title: 'PATENT_TITLE_4595' },
        { id: '0806034e-c5ae-4c0f-9984-45a95f8d3b2d', title: 'PATENT_TITLE_1001' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App