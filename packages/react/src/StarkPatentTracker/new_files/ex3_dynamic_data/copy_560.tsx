import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '9a6c000c-8a62-417c-ac0d-6642a315bdd1', title: 'PATENT_TITLE_7400' },
        { id: 'd132298d-551d-4aec-85df-751b7afdd158', title: 'PATENT_TITLE_8885' },
        { id: '2dc52ebf-a5fc-4af8-ab28-44964a96aecc', title: 'PATENT_TITLE_9987' },
        { id: '0e155945-7542-409d-8cfd-2a5a06b86ae8', title: 'PATENT_TITLE_5875' },
        { id: '83a4a43a-60b3-44f2-87a1-c4be6346a378', title: 'PATENT_TITLE_1796' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App