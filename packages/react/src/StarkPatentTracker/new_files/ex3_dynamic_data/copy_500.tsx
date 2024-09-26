import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '30077cf3-89fc-4c64-9df7-ba3c1a7231ea', title: 'PATENT_TITLE_7717' },
        { id: 'f3416944-8289-4602-8d8e-26d30175e635', title: 'PATENT_TITLE_5684' },
        { id: '286bcfe5-9ab0-4bc8-85ae-d4b910a876b9', title: 'PATENT_TITLE_2860' },
        { id: 'cb897071-5096-4c62-91fb-0d2a8708d5c9', title: 'PATENT_TITLE_9515' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App