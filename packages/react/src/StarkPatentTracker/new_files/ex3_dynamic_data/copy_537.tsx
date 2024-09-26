import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '4e492c7c-c61d-41c4-87f3-61cc725bd19f', title: 'PATENT_TITLE_3726' },
        { id: '2d7a8458-e798-43ba-abd8-b2c56a4ffa0e', title: 'PATENT_TITLE_4013' },
        { id: '47f3f050-366e-4998-bc04-7ff82d1a6025', title: 'PATENT_TITLE_8142' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App