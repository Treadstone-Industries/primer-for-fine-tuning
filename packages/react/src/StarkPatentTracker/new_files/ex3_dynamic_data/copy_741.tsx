import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '2ab632bc-0405-4eb7-8104-71f9449c8553', title: 'PATENT_TITLE_6693' },
        { id: '80cdc428-cc0b-417c-9d65-11aa9253b262', title: 'PATENT_TITLE_8509' },
        { id: 'dbd87e79-7eea-43f1-b6a3-35f5b79beba5', title: 'PATENT_TITLE_7047' },
        { id: '5c3d8529-ba1a-49ea-863c-09a85786f8b6', title: 'PATENT_TITLE_5736' },
        { id: '830155c3-3d09-473b-8914-a2fcb45f286f', title: 'PATENT_TITLE_2199' },
        { id: '0f2293e2-bcdc-4382-a2be-300bf2aa47f0', title: 'PATENT_TITLE_5860' },
        { id: '8f29d644-0bd5-4f28-aab8-d949c2e31300', title: 'PATENT_TITLE_3766' },
        { id: '3dc4da0d-41d2-4fdd-b7a1-a98cd1292c21', title: 'PATENT_TITLE_6858' },
        { id: '88e821fb-4d8a-4752-a989-b69db2e18397', title: 'PATENT_TITLE_6978' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App