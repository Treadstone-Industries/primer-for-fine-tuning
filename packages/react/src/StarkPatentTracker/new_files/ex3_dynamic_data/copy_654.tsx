import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '1ae0d5a5-8602-4684-9006-6c9728c2868a', title: 'PATENT_TITLE_6578' },
        { id: '0f3622e4-5257-45d5-ad7a-0e4fccbea3e2', title: 'PATENT_TITLE_5542' },
        { id: 'fd401cc3-e46e-4fac-abfb-9914134c2a9b', title: 'PATENT_TITLE_6673' },
        { id: 'f9ef81d3-fc83-4913-89e7-60d463a6bbfb', title: 'PATENT_TITLE_7736' },
        { id: 'a514d9af-f4d2-4e53-8a30-7b9cadfe6f97', title: 'PATENT_TITLE_9721' },
        { id: 'a0c8effe-d490-4744-84bc-53ce91694431', title: 'PATENT_TITLE_7840' },
        { id: 'e8df3ec8-e4ff-43a2-a0df-4fdb391c5ead', title: 'PATENT_TITLE_1784' },
        { id: '43317cc3-195f-462d-9c22-94a5e9d06aca', title: 'PATENT_TITLE_5941' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App