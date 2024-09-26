import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'ff76dc20-11d7-4777-bd73-6de3811b2441', title: 'PATENT_TITLE_6113' },
        { id: 'cd8024c9-315d-4a4c-8aa4-a5ddb121d32c', title: 'PATENT_TITLE_6442' },
        { id: '7894fcc8-c58f-49e8-adc0-32da4356376c', title: 'PATENT_TITLE_3843' },
        { id: '740c4093-3940-4d98-91db-58719808f5bb', title: 'PATENT_TITLE_7859' },
        { id: '1f76728e-48a1-4c86-9a27-f6fb7096b0e7', title: 'PATENT_TITLE_5961' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App