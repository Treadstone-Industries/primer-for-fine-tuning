import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '064ae482-c94e-4a7d-8851-f74bb9e90228', title: 'PATENT_TITLE_2795' },
        { id: '4bf56800-e4a2-4bf7-84e3-59a1a6c603da', title: 'PATENT_TITLE_5018' },
        { id: '346caaa6-598a-48ab-a3b9-3d9e54daf96b', title: 'PATENT_TITLE_5873' },
        { id: '80e8b428-d862-4976-880f-3a09d906b0d1', title: 'PATENT_TITLE_5769' },
        { id: '610b2597-22c2-4b77-92f2-12e19585edbe', title: 'PATENT_TITLE_8677' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App