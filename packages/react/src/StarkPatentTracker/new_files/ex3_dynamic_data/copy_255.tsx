import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'ee5a76df-f51f-47f1-ae2f-a8875fa2eb33', title: 'PATENT_TITLE_4974' },
        { id: '09b85c5c-3ac9-4de3-bfb5-96f1628e6945', title: 'PATENT_TITLE_7491' },
        { id: '1a3da237-e06f-4516-9d32-5b75c57fda42', title: 'PATENT_TITLE_7150' },
        { id: 'ad8b9237-3ee0-4c89-ad10-989a899de715', title: 'PATENT_TITLE_3527' },
        { id: 'b5cee78e-d533-4f69-ae5d-2a062c77f8d4', title: 'PATENT_TITLE_5244' },
        { id: 'eea15abc-47cf-4e23-9f4e-66ba91e06c59', title: 'PATENT_TITLE_6776' },
        { id: '0315d6e0-f893-4116-9f28-6c289628bb4b', title: 'PATENT_TITLE_2693' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App