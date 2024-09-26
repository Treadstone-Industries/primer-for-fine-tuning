import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '51f1415f-69fc-43c9-aad7-c4c363e7594a', title: 'PATENT_TITLE_8832' },
        { id: '5ff5d3c2-046f-42c3-a2d4-3403eae5d368', title: 'PATENT_TITLE_6267' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App