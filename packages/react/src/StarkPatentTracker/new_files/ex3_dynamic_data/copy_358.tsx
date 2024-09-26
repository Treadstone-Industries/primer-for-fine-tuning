import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'e0e46cff-49a2-4a43-9cd6-780a2e0c34f4', title: 'PATENT_TITLE_2059' },
        { id: '338fb052-9f01-4954-87d4-6a7debe1b268', title: 'PATENT_TITLE_2779' },
        { id: 'fb830763-cf04-49dc-ab28-e7b0d926f48d', title: 'PATENT_TITLE_6906' },
        { id: '1e1fe018-7b91-49cf-b428-3438dbcaee71', title: 'PATENT_TITLE_3635' },
        { id: 'd5879d14-557a-4cd1-bf52-8807a5ff1373', title: 'PATENT_TITLE_3271' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App