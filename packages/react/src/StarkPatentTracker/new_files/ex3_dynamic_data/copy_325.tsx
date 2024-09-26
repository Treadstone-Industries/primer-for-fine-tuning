import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'fb0d4bc2-4aca-4ee5-bd0e-48a9c10039df', title: 'PATENT_TITLE_5937' },
        { id: 'ec75b905-8e30-4403-8548-b220f1d37870', title: 'PATENT_TITLE_7325' },
        { id: 'af5b5bb2-d345-4930-82f6-7016153f40bb', title: 'PATENT_TITLE_4760' },
        { id: 'de2ed3fc-9031-4785-88ff-8645a9e3650d', title: 'PATENT_TITLE_4059' },
        { id: 'a9e8c9fa-8ab1-4690-930c-b82d0825cabb', title: 'PATENT_TITLE_5739' },
        { id: '8a076752-b9f1-4818-892c-e52a549a1879', title: 'PATENT_TITLE_3402' },
        { id: '7d5d9719-2002-4ba2-bf77-728e032d66db', title: 'PATENT_TITLE_8414' },
        { id: 'f6ba9e47-0f18-43e5-ba23-7a487f5d7819', title: 'PATENT_TITLE_9747' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App