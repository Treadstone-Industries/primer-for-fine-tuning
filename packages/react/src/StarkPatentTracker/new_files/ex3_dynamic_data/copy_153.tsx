import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '1d256bcf-c8a1-449f-ab53-2e85a6b43352', title: 'PATENT_TITLE_1838' },
        { id: '248d3bf6-5b86-445b-bbef-ae2472e5be6f', title: 'PATENT_TITLE_7879' },
        { id: 'f4043d4d-bf0a-4926-8131-d9bf97cce827', title: 'PATENT_TITLE_9308' },
        { id: 'f3598f3e-7235-422b-9cad-e8757a2ae08c', title: 'PATENT_TITLE_2070' },
        { id: '1ef023f3-57b7-4052-b9d8-3210bc2b6101', title: 'PATENT_TITLE_2511' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App