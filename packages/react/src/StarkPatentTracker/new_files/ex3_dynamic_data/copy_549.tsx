import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'ee9854a0-9fda-4fef-84c2-e6cababa503f', title: 'PATENT_TITLE_9961' },
        { id: '4a2def1f-65f5-4c6b-a6e1-9e5deda2b28d', title: 'PATENT_TITLE_5765' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App