import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'e15b5b1e-4cd1-4e50-a62a-c64fa2268dd1', title: 'PATENT_TITLE_4844' },
        { id: '0097b627-87d7-4300-8776-c5148a2b8b60', title: 'PATENT_TITLE_5111' },
        { id: '882c8744-ce42-4b30-a0fe-ea5501fc9149', title: 'PATENT_TITLE_9848' },
        { id: 'edbbc763-707c-478f-a186-fd2ae5fc99bb', title: 'PATENT_TITLE_7299' },
        { id: '5b6759fb-bfaa-4a1f-9c41-937bea313dd0', title: 'PATENT_TITLE_3302' },
        { id: 'b8465b26-b377-4bbd-9b61-1ab52c2fc9b1', title: 'PATENT_TITLE_9800' },
        { id: '680903c7-fd6a-44a3-85dc-c634e192ae69', title: 'PATENT_TITLE_9589' },
        { id: 'fb3c86ce-25c8-4d3c-aff1-0e8ae5834117', title: 'PATENT_TITLE_3041' },
        { id: '0021b88a-dc5e-4ae8-ac95-bfabc337bfae', title: 'PATENT_TITLE_9207' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App